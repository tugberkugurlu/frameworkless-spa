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
            self.todoList = ko.observableArray();
            self.user = ko.observable();
        };
        
        var User = function() {
            var self = this;
            self.name = ko.observable();
            self.surname = ko.observable();
        };
        
        var user = new User()
            .name('tugberk')
            .surname('ugurlu');
        
        var app = new App()
            .welcomeMessage(config.welcomeMessage)
            .todoList(['foo', 'bar'])
            .user(user);
            
        ko.applyBindings(app);
    });
}());