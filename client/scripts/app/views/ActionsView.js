define([
    "ember",
    "text!templates/actionsTemplate.html"
], function(Ember, actionsTemplate) {

    var ActionsView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(actionsTemplate)
    });
    return ActionsView;
});