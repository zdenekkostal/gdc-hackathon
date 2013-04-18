define(["ember"], function(Ember){
    var ActionsController = Ember.Controller.extend({
        needs: ['schedules'],

        previousAction: function() {
            return this.get('controllers.schedules.previousAction');
        }.property('controllers.schedules.previousAction'),

        currentAction: function() {
            return this.get('controllers.schedules.currentAction');
        }.property('controllers.schedules.currentAction'),

        nextAction: function() {
            return this.get('controllers.schedules.nextAction');
        }.property('controllers.schedules.nextAction')
    });
    return ActionsController;
});