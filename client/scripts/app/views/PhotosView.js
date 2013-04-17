define([
    "ember",
    "text!templates/photosTemplate.html"
], function(Ember, photosTemplate) {

    var PhotosView = Ember.View.extend({
        defaultTemplate: Ember.Handlebars.compile(photosTemplate)
    });
    return PhotosView;
});
