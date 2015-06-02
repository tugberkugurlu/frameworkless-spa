(function() {
    requirejs.config({
        paths: {
            'text': '../bower_components/requirejs-text/text',
            'knockout': '../bower_components/knockout/dist/knockout',
            "knockout-amd-helpers": "../bower_components/knockout-amd-helpers/build/knockout-amd-helpers",
            'core': './core'
        }
    });
    
    require(['core/config', 'knockout', 'knockout-amd-helpers'], function (config, ko) {
        console.log(config.welcomeMessage);
        
        var App = function() {
            var self = this;
            self.welcomeMessage = ko.observable();  
        };
        
        var app = new App()
            .welcomeMessage(config.welcomeMessage);
            
        ko.applyBindings(app);
    });
}());