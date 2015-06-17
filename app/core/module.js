define(['knockout'], function(ko) { 
    var ctor = function(name, viewModel) {
        var self = this;
        self.name = ko.observable(name);
        self.viewModel = ko.observable(viewModel);
    };
    
    return ctor;
});