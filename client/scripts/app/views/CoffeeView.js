define([
    "ember",
    "text!templates/coffeeTemplate.html"
], function(Ember, coffeeTemplate) {

    var CoffeeView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(coffeeTemplate)
    });
    return CoffeeView;
});