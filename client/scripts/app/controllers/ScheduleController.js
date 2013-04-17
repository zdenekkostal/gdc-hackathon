define(["ember"], function(Ember){
    var ScheduleController = Ember.Controller.extend({

        needs: ['schedules', 'time'],

        cssClass: function() {
            var start = this.get('content.start');
            var currentActionStart = this.get('controllers.schedules.currentAction.start');
            var nextAction = this.get('controllers.schedules.nextAction');

            if (start < currentActionStart || !nextAction) {
                return 'is-schedule-past';
            } else if (start == currentActionStart) {
                return 'is-schedule-actual'
            } else {
                return '';
            }
        }.property('content.start', 'controllers.schedules.currentAction.start')
    });
    return ScheduleController;
});