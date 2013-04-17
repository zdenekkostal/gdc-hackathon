define([
    "ember",
    "text!templates/goodPointsTemplate.html"
], function(Ember, goodPointsTemplate) {

    var GoodPointsView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(goodPointsTemplate)
    });
    return GoodPointsView;
});
