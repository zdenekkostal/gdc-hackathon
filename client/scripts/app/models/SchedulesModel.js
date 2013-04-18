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
                title: 'Free Lunch'
            },

            {
                start: new Date(2013, 3, 18, 16, 0),
                title: 'Free Snacks'
            },

            {
                start: new Date(2013, 3, 18, 19, 0),
                title: 'Dinner time (OOO)'
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
                start: new Date(2013, 3, 19, 3, 0),
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
                title: 'Free lunch'
            },


            {
                start: new Date(2013, 3, 19, 14),
                title: 'NERF Battle: Revenge'
            },

            {
                start: new Date(2013, 3, 19, 16),
                title: 'Free snacks'
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
