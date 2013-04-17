define([
	"views/ApplicationView",
	"controllers/ApplicationController",

        "views/CoffeeView",
        "controllers/CoffeeController",

        "views/RepoView",
        "controllers/RepoController",

        "views/TwitterView",
        "controllers/TwitterController",

        "views/PhotosView",
        "controllers/PhotosController",

        "views/GoodPointsView",
        "controllers/GoodPointsController",

	"app/router"
], function(
        ApplicationView, ApplicationController,
        CoffeeView, CoffeeController,

        RepoView, RepoController,

        TwitterView, TwitterController,

        PhotosView, PhotosController,

        GoodPointsView, GoodPointsController,

        Router){

        /*Module Pattern*/
	var App = {
		ApplicationView: ApplicationView,
		ApplicationController: ApplicationController,

                CoffeeView: CoffeeView,
                CoffeeController: CoffeeController,

                RepoView: RepoView,
                RepoController: RepoController,

                TwitterView: TwitterView,
                TwitterController: TwitterController,

                PhotosView: PhotosView,
                PhotosController: PhotosController,

                GoodPointsView: GoodPointsView,
                GoodPointsController: GoodPointsController,

		Router: Router
	};

	return App;
});
