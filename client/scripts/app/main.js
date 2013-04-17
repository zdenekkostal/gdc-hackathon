define([
	"views/ApplicationView",
	"controllers/ApplicationController",

        "views/CoffeeView",
        "controllers/CoffeeController",

        "views/RepoView",
        "controllers/RepoController",

	"app/router"
], function(
        ApplicationView, ApplicationController,
        CoffeeView, CoffeeController,

        RepoView, RepoController,

        Router){

        /*Module Pattern*/
	var App = {
		ApplicationView: ApplicationView,
		ApplicationController: ApplicationController,

                CoffeeView: CoffeeView,
                CoffeeController: CoffeeController,

                RepoView: RepoView,
                RepoController: RepoController,

		Router: Router
	};

	return App;
});
