define([
    "ember",
    "text!templates/twitterTemplate.html"
], function(Ember, twitterTemplate) {

    var TwitterView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(twitterTemplate)
    });
    return TwitterView;
});
