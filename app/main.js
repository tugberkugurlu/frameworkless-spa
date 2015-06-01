(function() {
    requirejs.config({
        paths: {
            'text': '../bower_components/requirejs-text/text',
            'core': './core'  
        }
    });
    
    require(['core/config'], function (config) {
        console.log(config.welcomeMessage);
    });
}());