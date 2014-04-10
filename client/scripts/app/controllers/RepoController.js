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
                    repo.projectUrl = repo.url.indexOf('http://') !== -1 || repo.url.indexOf('https://') !== -1 ? repo.url : 'http://'+repo.url;
                });

                this.set('content', data);
            }.bind(this));
        },

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
