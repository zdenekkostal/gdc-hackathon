define(["ember"], function(Ember){

	var TwitterController = Ember.Controller.extend({

    twitterQuery: 'http://search.twitter.com/search.json?q=gdhackathon',

    content: [],

    init: function() {
        this._super();
        this.set('content', this.loadTweets());
    },

    loadTweets: function() {
        var that = this,
            result = Ember.ArrayProxy.create({
                content: [],
                isLoaded: false
            });

        Ember.$.ajax({
            url: this.twitterQuery,
            dataType: 'jsonp',
            context: this,
            success: function(data) {
                var tweets = data.results;

                tweets.forEach(function(tweet, index) {
                    if (index >= 4) return;
                    result.pushObject({
                        tweet: tweet.text,
                        user: tweet.from_user,
                        userUrl: 'https://twitter.com/'+tweet.from_user
                    });
                });
                result.set('isLoaded', true);
            }
        });

        return result;
    }
    });

	return TwitterController;

});
