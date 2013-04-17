define([
    "ember",
    "text!templates/schedulesTemplate.html",
    "controllers/ScheduleController"
], function(Ember, schedulesTemplate, ScheduleController) {

    var SchedulesView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(schedulesTemplate)
    });
    return SchedulesView;
});