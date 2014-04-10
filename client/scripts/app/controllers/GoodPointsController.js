define(['ember', 'moment-timezone'], function(Ember, moment){
	var GoodPointsController = Ember.Controller.extend({

        needs: ['progressBar'],

        min: 0,

        max: 9999,

        init: function() {
            this._super();
            moment.tz.add({
                 "zones": {
                     "America/Los_Angeles": [
                         "-7:52:58 - LMT 1883_10_18_12_7_2 -7:52:58",
                         "-8 US P%sT 1946 -8",
                         "-8 CA P%sT 1967 -8",
                         "-8 US P%sT"
                     ]
                 },
                 "rules": {
                     "US": [
                         "1918 1919 2 0   8 2 0 1 D",
                         "1918 1919 9 0 8 2 0 0 S",
                         "1942 1942 1 9 7 2 0 1 W",
                         "1945 1945 7 14 7 23 1 1 P",
                         "1945 1945 8 30 7 2 0 0 S",
                         "1967 2006 9 0 8 2 0 0 S",
                         "1967 1973 3 0 8 2 0 1 D",
                         "1974 1974 0 6 7 2 0 1 D",
                         "1975 1975 1 23 7 2 0 1 D",
                         "1976 1986 3 0 8 2 0 1 D",
                         "1987 2006 3 1 0 2 0 1 D",
                         "2007 9999 2 8 0 2 0 1 D",
                         "2007 9999 10 1 0 2 0 0 S"
                     ],
                     "CA": [
                         "1948 1948 2 14 7 2 0 1 D",
                         "1949 1949 0 1 7 2 0 0 S",
                         "1950 1966 3 0 8 2 0 1 D",
                         "1950 1961 8 0 8 2 0 0 S",
                         "1962 1966 9 0 8 2 0 0 S"
                     ]
                 },
                 "links": {}
             });

        },

        goodPoints: function() {
            var progress = this.get('controllers.progressBar.progress');
            var min = this.get('min');
            var max = this.get('max');

            return (max - min) * (progress);
        }.property('controllers.progressBar.progress'),

        hasStarted: function() {
            return moment("2014-04-10T08:00").tz("America/Los_Angeles") < moment();
        }.property('controllers.progressBar.progress'),

        goodTime: function() {
            var hasStarted = this.get('hasStarted');
            return hasStarted ? moment("2014-04-11T11:00").tz("America/Los_Angeles").fromNow() : moment("2014-04-10T08:00").tz("America/Los_Angeles").fromNow();
        }.property('controllers.progressBar.progress'),
    });
	return GoodPointsController;
});
