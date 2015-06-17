define(['knockout'], function(ko) { 
    var ctor = function() {
        var self = this;
        self.module = ko.observable();
        self.viewModel = ko.observable();
    };
    
    return ctor;
});