define(["ember"], function(Ember){
    var ProgressBarController = Ember.Controller.extend({

        needs: ['schedules', 'time'],

        progress: function() {
            var start = this.get('controllers.schedules.firstAction.start');
            var end = this.get('controllers.schedules.lastAction.start');
            var currentTime = this.get('controllers.time.currentTime');

            if (currentTime < start) {
                return 0;
            } else if (currentTime > end) {
                return 100;
            } else {
                return Math.floor((currentTime - start) / (end - start) * 100);
            }
        }.property('controllers.schedules.firstAction', 'controllers.schedules.lastAction', 'controllers.time.currentTime'),

        style: function() {
            var progress = this.get('progress');

            return 'width: ' + progress + '%';
        }.property('progress')
    });
    return ProgressBarController;
});