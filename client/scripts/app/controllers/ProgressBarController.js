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
                return (currentTime - start) / (end - start);
            }
        }.property('controllers.schedules.firstAction', 'controllers.schedules.lastAction', 'controllers.time.currentTime'),

        style: function() {
            var progress = this.get('progress');

            return 'width: ' + Math.floor(progress * 100) + '%';
        }.property('progress')
    });
    return ProgressBarController;
});