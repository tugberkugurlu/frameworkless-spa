(function() {
    requirejs.config({
        paths: {
            'text': '../bower_components/requirejs-text/text',
            'knockout': '../bower_components/knockout/dist/knockout',
            'core': './core'
        }
    });
    
    require(['core/config', 'knockout'], function (config, ko) {
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