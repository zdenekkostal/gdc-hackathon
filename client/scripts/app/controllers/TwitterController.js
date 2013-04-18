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
                    var textWords = tweet.text.split(' ');
                    textWords = textWords.map(function(word) {
                        if (word.substring(0,1) === '#') {
                            return '<a href="https://twitter.com/search?q=%23'+word.substring(1, word.length)+'&src=hash">'+word+'</a>';
                        } else if (word.substring(0,7) === 'http://' || word.substring(0,8) === 'https://') {
                            return '<a href="'+word+'">'+word+'</a>';
                        }
                        return word;
                    });
                    var textMarkup = textWords.join(' ');

                    result.pushObject({
                        tweet: textMarkup,
                        user: tweet.from_user,
                        userUrl: 'https://twitter.com/'+tweet.from_user,
                        createdAtAgo: $.timeago(tweet.created_at)
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
