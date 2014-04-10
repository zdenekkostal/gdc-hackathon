define(["ember"], function(Ember){
    var thursday = {
        date: new Date(2014, 3, 10),

        actions: [
            {
                start: new Date(2014, 3, 10, 8, 0),
                title: '(17:00) Registration & Warm up'
            },

            {
                start: new Date(2014, 3, 10, 9, 0),
                title: '(18:00) Breakfast/Dinner'
            },

            {
                start: new Date(2014, 3, 10, 10, 0),
                title: '(19:00) Hackathon All-Hands'
            },

            {
                start: new Date(2014, 3, 10, 12, 0),
                title: '(22:00) Lunch / Late Snack'
            },

            {
                start: new Date(2014, 3, 10, 18, 0),
                title: '(03:00) Dinner / GoodNight'
            },

            {
                start: new Date(2014, 3, 10, 23, 30),
                title: '(08:30) Late Snack / Breakfast'
            }
        ]
    };

    var friday = {
        date: new Date(2014, 3, 11),

        actions: [
            {
                start: new Date(2014, 3, 11, 3),
                title: '(12:00) GoodNight / Lunch Time'
            },
            {
                start: new Date(2014, 3, 11, 9),
                title: '(18:00) Finish Breakfast / Dinner'
            },

            {
                start: new Date(2014, 3, 11, 10),
                title: '(19:00) Presentations'
            },

            {
                start: new Date(2014, 3, 11, 11),
                title: '(20:00) Friday Chillout / BeerTime / Afterparty'
            }
        ]
    };

    return [
        thursday,
        friday
    ];

});
