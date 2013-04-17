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
        var nextPage = this.nextPage,
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
                var instaBurgers = data.data,
                    maxIndex = instaBurgers.length - instaBurgers.length%3;

                instaBurgers.forEach(function(burger, index) {
                    if (index >= maxIndex) return;
                    result.pushObject({
                        lowRes: burger.images.low_resolution.url,
                        desc: burger.caption && burger.caption.text,
                        user: burger.user.username,
                        instagramLink: burger.link
                    });
                });
                that.nextPage = data.pagination.next_url;
                result.set('isLoaded', true);
            }
        });

        return result;
    }
});
return PhotosController;
});
