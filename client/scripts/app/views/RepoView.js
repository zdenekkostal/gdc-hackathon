define([
    "ember",
    "text!templates/repoTemplate.html"
], function(Ember, repoTemplate) {

    var RepoView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(repoTemplate)
    });
    return RepoView;
});