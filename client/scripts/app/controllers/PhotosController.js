define(["ember"], function(Ember){
var INSTAGRAM_ID = '899426d0f7f445ff9f744fff5260e134';

var PhotosController = Ember.Controller.extend({

    nextPage: 'https://api.instagram.com/v1/tags/hamburger/media/recent?client_id='+INSTAGRAM_ID,

    content: [],

    init: function() {
        this._super();
        this.set('content', this.loadPhotos());
    },

    loadPhotos: function() {
            that = this,
            result = Ember.ArrayProxy.create({
                content: [],
                isLoaded: false
            });

        Ember.$.ajax({
            url: this.nextPage,
            dataType: 'jsonp',
            context: this,
            success: function(data) {
                var instaPhotos = data.data;

                instaPhotos.forEach(function(photo, index) {
                    if (index >= 12) return;
                    result.pushObject({
                        lowRes: photo.images.low_resolution.url,
                        instagramLink: photo.link
                    });
                });
                result.set('isLoaded', true);
            }
        });

        return result;
    }
});
return PhotosController;
});
