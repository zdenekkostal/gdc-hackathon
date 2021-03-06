define(["ember", "models/SchedulesModel"], function(Ember, schedulesModel){
    var SchedulesController = Ember.Controller.extend({

        needs: ['time'],

        content: schedulesModel,

        allActions: function() {
            var days = this.get('content');
            var actions = [];

            days.forEach(function(day) {
                actions = actions.concat(day.actions || []);
            }, this);

            return actions;
        }.property('content'),

        firstAction: function() {
            return this.get('allActions').objectAt(0);
        }.property('allActions'),

        lastAction: function() {
            var allActions = this.get('allActions');
            return allActions.objectAt(allActions.length - 1);
        }.property('allActions'),

        previousAction: function() {
            var allActions = this.get('allActions');
            var currentTime = this.get('controllers.time.currentTime');
            var previousAction;

            for (var i = 0; i < allActions.length; i++) {
                var action = allActions[i];

                if (currentTime < action.start.getTime()) {
                    return previousAction;
                }

                previousAction = action;
            }

            return undefined;
        }.property('controllers.time.currentTime'),

        currentAction: function() {
            var allActions = this.get('allActions');
            var currentTime = this.get('controllers.time.currentTime');

            for (var i = 0; i < allActions.length; i++) {
                var action = allActions[i];

                if (currentTime > action.start.getTime() && currentTime < action.start.getTime() + (30 * 60 * 1000)) {
                    return action;
                }
            }

            return undefined;
        }.property('controllers.time.currentTime'),

        nextAction: function() {
            var allActions = this.get('allActions');
            var currentTime = this.get('controllers.time.currentTime');

            for (var i = 0; i < allActions.length; i++) {
                var action = allActions[i];

                if (currentTime < action.start.getTime()) {
                    return action;
                }
            }

            return undefined;
        }.property('controllers.time.currentTime'),
    });
    return SchedulesController;
});