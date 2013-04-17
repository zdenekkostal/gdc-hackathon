define([
    "ember",
    "text!templates/progressBarTemplate.html"
], function(Ember, progressBarTemplate) {

    var ProgressBarView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(progressBarTemplate)
    });
    return ProgressBarView;
});