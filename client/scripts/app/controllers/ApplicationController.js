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

    Ember.Handlebars.registerBoundHelper('floor', function(value, options) {
        return value? Math.floor(value) : '';
    });

    Ember.Handlebars.registerBoundHelper('rest', function(value, options) {
        var rest = value ? Math.floor((value - Math.floor(value)) * 100) : 0;
        return rest < 10 ? '0' + rest : rest;
    });

	var ApplicationController = Ember.Controller.extend();
	return ApplicationController;
});
