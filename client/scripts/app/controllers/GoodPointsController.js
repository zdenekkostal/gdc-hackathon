define(["ember"], function(Ember){
	var GoodPointsController = Ember.Controller.extend({

        needs: ['progressBar'],

        min: 0,

        max: 9999,

        goodPoints: function() {
            var progress = this.get('controllers.progressBar.progress');
            var min = this.get('min');
            var max = this.get('max');

            return (max - min) * (progress);
        }.property('controllers.progressBar.progress'),

    });
	return GoodPointsController;
});
