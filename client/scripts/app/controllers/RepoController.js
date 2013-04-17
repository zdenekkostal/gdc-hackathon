define(["ember"], function(Ember){
	var RepoController = Ember.Controller.extend({
        content: [ ],

        init: function() {
            this._super();
            this.set('content', this.findAll());
        },

        findAll: function() {
            return [
                { url: 'Repo/url/1'},
                { url: 'Repo/url/3'}
            ]
        }
    });
	return RepoController;
});
