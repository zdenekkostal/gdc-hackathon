define(["ember"], function(Ember){

    Ember.Handlebars.registerBoundHelper('time', function(value, options) {
        return value? value.format('HH:MM') : '';
    });

    Ember.Handlebars.registerBoundHelper('day', function(value, options) {
        return value? value.format('dddd') : '';
    });

    Ember.Handlebars.registerBoundHelper('date', function(value, options) {
        return value? value.format('mmm d') : '';
    });

	var ApplicationController = Ember.Controller.extend();
	return ApplicationController;
});
