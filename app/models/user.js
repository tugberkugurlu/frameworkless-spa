define(['knockout'], function(ko) { 
    var ctor = function() {
        var self = this;
        self.name = ko.observable();
        self.surname = ko.observable();
    };
    
    return ctor;
});