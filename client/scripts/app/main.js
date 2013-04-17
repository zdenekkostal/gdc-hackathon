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

	"app/router"
], function(
        ApplicationView, ApplicationController,
        CoffeeView, CoffeeController,

        RepoView, RepoController,

        TwitterView, TwitterController,

        PhotosView, PhotosController,

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

		Router: Router
	};

	return App;
});
