define({
    app_name: "MyExampleApp",
    shim: {
        'ember': {
            deps: ['handlebars', 'jquery', 'jquery.timeago', 'date'],
            exports: 'Ember'
        }
    },
    paths: {
        'App': 'app/main',
        'models': 'app/models',
        'views': 'app/views',
        'controllers': 'app/controllers',
        'templates': 'app/templates',
        /*libs*/
        'jquery': 'libs/jquery/1.9.1/jquery',
        'moment': 'libs/moment',
        'moment-timezone': 'libs/moment-timezone',
        'handlebars': 'libs/handlebars/1.0.rc.3/handlebars',
        'ember': 'libs/ember/1.0.0-rc.2/ember',
        'date': 'libs/date.format',
        /*requirejs-plugins*/
        'text': 'libs/requirejs-plugins/text',
        'hbs': 'libs/requirejs-plugins/hbs',
        'domReady': 'libs/requirejs-plugins/domReady',
        /*jquery-plugins*/
        'jquery.timeago': 'libs/jquery.timeago'
    },
    /*hbs plugin options*/
    hbs: {
        disableI18n: true,
        templateExtension: "html"
    }

});

