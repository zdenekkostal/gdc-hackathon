define(["ember"], function(Ember) {
    var RepoController = Ember.ArrayController.extend({
        needs: ['application'],
        content: [],

        showSubmit: function() {
            return !this.get('controllers.application.viewOnly');
        }.property('controllers.application.viewOnly'),

        init: function() {
            this._super();
            this.findAll();
        },
        findAll: function() {
            Ember.$.get('/repo', function(data) {
                data.forEach(function(repo) {
                    repo.projectUrl = repo.url.indexOf('http://') !== -1 ? repo.url : 'http://'+repo.url;
                });

                this.set('content', data);
            }.bind(this));
        },

        _isGithubUri: function(uri) {
            uri = uri || '';
            return uri.match(/.+github\.com\/.+/)
        },

        isRepoUrlValid: function() {
            var repo = this.get('repo') || '';

            if (repo == '') {
                return true;
            }

            return this._isGithubUri(repo);
        }.property('repo'),

        isSubmitDisabled: function() {
            var repo = this.get('repo');
            return !this._isGithubUri(repo);
        }.property('repo'),

        submitRepo: function(repo, repoTitle) {
            debugger;
            var repoPayload = {
                "url": repo,
                'title': repoTitle
            };

            Ember.$.post("/repo", repoPayload).done(function() {
                this.get('content').pushObject(repoPayload);
            }.bind(this));
        }

    });
    return RepoController;
});
