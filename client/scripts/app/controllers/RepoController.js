define(["ember"], function(Ember) {
    var RepoController = Ember.Controller.extend({
        content: [],
        init: function() {
            this._super();
            this.findAll();
        },
        findAll: function() {
            Ember.$.get('http://localhost:8844/repo', function(data) {
                this.set('content', data);
            }.bind(this));
        }
    });
    return RepoController;
});
