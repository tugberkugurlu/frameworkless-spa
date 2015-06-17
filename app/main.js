(function() {
    requirejs.config({
        paths: {
            'text': '../bower_components/requirejs-text/text',
            'knockout': '../bower_components/knockout/dist/knockout',
            'knockout-amd-helpers': '../bower_components/knockout-amd-helpers/build/knockout-amd-helpers',
            'jquery': '../bower_components/jquery/dist/jquery',
            'core': './core',
            'models': './models'
        }
    });
    
    require(['core/config', 'knockout', 'core/app', 'core/module', 'models/user', 'knockout-amd-helpers'], function (config, ko, App, Module, User) {
        console.log(config.welcomeMessage);
        
        var user = new User().name('tugberk').surname('ugurlu');
        var app = new App().module(new Module('home', user));
        
        window.setTimeout(function(){
            var newModule = new Module('about');
            window.setTimeout(function(){
                newModule.viewModel('I am foo!');
                app.module(newModule);
            }, 1000);
        }, 3000);
        
        ko.applyBindings(app);
    });
}());