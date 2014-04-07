define(["ember"], function(Ember){
    var thursday = {
        date: new Date(2014, 3, 10),

        actions: [
            {
                start: new Date(2014, 3, 10, 8, 0),
                title: 'Registration & Warm up'
            },

            {
                start: new Date(2014, 3, 10, 9, 0),
                title: 'Breakfast/Dinner'
            },

            {
                start: new Date(2014, 3, 10, 10, 0),
                title: 'Hackathon All-Hands'
            },

            {
                start: new Date(2014, 3, 10, 11, 0),
                title: 'Free Lunch'
            },

            {
                start: new Date(2014, 3, 10, 18, 0),
                title: 'Dinner / GoodNight'
            }
        ]
    };

    var friday = {
        date: new Date(2014, 3, 11),

        actions: [
            {
                start: new Date(2014, 3, 11, 9),
                title: 'Finish Breakfast / Dinner'
            },

            {
                start: new Date(2014, 3, 11, 10),
                title: 'Presentations'
            },

            {
                start: new Date(2014, 3, 11, 11),
                title: 'Friday Chillout / BeerTime / Afterparty'
            }
        ]
    };

    return [
        thursday,
        friday
    ];

});
