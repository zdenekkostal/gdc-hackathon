define(["ember"], function(Ember){
	var CoffeeController = Ember.Controller.extend({

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

                    data.forEach(function(coffee) {
                        result.get('coffees').pushObject(Ember.Object.create({ isNew: false }));
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
