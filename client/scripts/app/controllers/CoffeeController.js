define(["ember"], function(Ember){
	var CoffeeController = Ember.Controller.extend({
        needs: ['application'],

        showSubmit: function() {
            return !this.get('controllers.application.viewOnly');
        }.property('controllers.application.viewOnly'),

        coffeeQuery: '/coffee',

        content: [],
        lastContent: [],

        init: function() {
            this._super();

            this.set('content', this.loadCoffees());
        },

        loadCoffees: function() {
            var that = this,
                result = Ember.Object.create({
                    mg: 0,
                    coffees20: [],
                    coffees5: [],
                    coffees: [],
                    isLoaded: false
                });

            Ember.$.ajax({
                url: this.coffeeQuery,
                dataType: 'json',
                context: this,
                success: function(data) {
                    result.set('mg', data.reduce(function(rollingValue, coffee) {
                        return rollingValue + coffee.mg;
                    }, 0));

                    var coffees5 = 0;
                    var coffees20 = 0;
                    data.forEach(function(coffee) {
                        result.get('coffees').pushObject(Ember.Object.create({ isNew: false }));

                        coffees5++;
                        if (coffees5 === 10) {
                            coffees5 = 5;
                            coffees20++;
                            result.set('coffees', result.get('coffees').slice(0, -5));
                            result.get('coffees5').pushObject(Ember.Object.create({ isNew: false }));
                        }

                        if (coffees20 === 8) {
                            coffees20 = 4;
                            result.set('coffees5', result.get('coffees').slice(0, -4));
                            result.get('coffees20').pushObject(Ember.Object.create({ isNew: false }));
                        }
                    }, this);

                    result.set('isLoaded', true);
                }
            });

            return result;
        },

        submitCoffee: function() {
            Ember.$.post("/coffee", {}).done(function(coffee) {
                this.get('content.coffees').pushObject(Ember.Object.create({ isNew: true }));
                this.get('content').set('mg', this.get('content.mg') + coffee.mg);
            }.bind(this));

            Ember.run.later(this, function() {
                this.get('content.coffees').forEach(function(coffee) {
                    coffee.set('isNew', false);
                });
            }, 500);
        }

    });

	return CoffeeController;
});
