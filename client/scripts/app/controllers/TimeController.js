define(["ember"], function(Ember){
    var TimeController = Ember.Controller.extend({

        actualTime: null,

        // hours
        offset: 0 * 60 * 60 * 1000,

        init: function() {
            this._setTime();
            this._scheduleTimeRefresh();
        },

        currentTime: function() {
            return this.get('actualTime') + this.get('offset');
        }.property('actualTime', 'offset'),

        _scheduleTimeRefresh: function() {
            Em.run.later(this, this._setTime, 1000);
        },

        _setTime: function() {
            this.set('actualTime', (new Date()).getTime());
            this._scheduleTimeRefresh();
        }

    });

    return TimeController;
});