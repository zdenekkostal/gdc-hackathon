define(["ember"], function(Ember){
    var thursday = {
        date: new Date(2013, 3, 18),

        actions: [
            {
                start: new Date(2013, 3, 18, 8, 0),
                title: 'Registration'
            },

            {
                start: new Date(2013, 3, 18, 9, 0),
                title: 'Breakfast'
            },

            {
                start: new Date(2013, 3, 18, 12, 0),
                title: 'Lunch'
            },

            {
                start: new Date(2013, 3, 18, 16, 0),
                title: 'NERF Battle'
            },

            {
                start: new Date(2013, 3, 18, 18, 0),
                title: 'Dinner'
            },

            {
                start: new Date(2013, 3, 18, 21, 0),
                title: 'Hunting Grumpy cat'
            },

            {
                start: new Date(2013, 3, 18, 23, 30),
                title: 'Midnight pizza'
            },

            {
                start: new Date(2013, 3, 19, 2, 0),
                title: 'Scooter rallye'
            },

            {
                start: new Date(2013, 3, 19, 4, 0),
                title: 'GoodNap'
            }
        ]
    };

    var friday = {
        date: new Date(2013, 3, 19),

        actions: [
            {
                start: new Date(2013, 3, 19, 8),
                title: 'Office run'
            },

            {
                start: new Date(2013, 3, 19, 9),
                title: 'Breakfast'
            },

            {
                start: new Date(2013, 3, 19, 12),
                title: 'Lunch'
            },

            {
                start: new Date(2013, 3, 19, 14),
                title: 'NERF Battle: Revenge'
            },

            {
                start: new Date(2013, 3, 19, 16),
                title: 'Show, tell & eat'
            },

            {
                start: new Date(2013, 3, 19, 18),
                title: 'Beer time'
            }
        ]
    };

    var saturday = {
        date: new Date(2013, 3, 20),

        actions: [
            {
                start: new Date(2013, 3, 20, 9),
                title: 'Morning sunshine'
            },

            {
                start: new Date(2013, 3, 20, 10),
                title: 'Afterparty on rails'
            },

            {
                start: new Date(2013, 3, 20, 23),
                title: 'The end'
            }
        ]
    };

    return [
        thursday,
        friday,
        saturday
    ];
});