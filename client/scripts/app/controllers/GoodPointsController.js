define(['ember', 'moment'], function(Ember, moment){
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

        hasStarted: function() {
            return moment("2014-04-10T08:00") < moment();
        }.property('controllers.progressBar.progress'),

        goodTime: function() {
            var hasStarted = this.get('hasStarted');
            return hasStarted ? moment("2014-04-11T11:00").fromNow() : moment("2014-04-10T08:00").fromNow();
        }.property('controllers.progressBar.progress'),
    });
	return GoodPointsController;
});
