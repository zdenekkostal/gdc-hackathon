define(["ember"], function(Ember) {
    var RepoController = Ember.ArrayController.extend({
        content: [],
        init: function() {
            this._super();
            this.findAll();
        },
        findAll: function() {
            Ember.$.get('http://localhost:8844/repo', function(data) {
                data.forEach(function(repo) {
                    repo.name = repo.url.replace('https://github.com/', '');
                    repo.name = repo.name.replace('/tree', '');
                });

                this.set('content', data);
            }.bind(this));
        },

        submitRepo: function(repo) {
            var repoPayload = { "url": repo };
            Ember.$.post("http://localhost:8844/repo", repoPayload).done(function() {
                this.get('content').pushObject(repoPayload);
            }.bind(this));
        }

    });
    return RepoController;
});
