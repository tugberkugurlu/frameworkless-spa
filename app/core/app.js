define(['knockout', 'jquery'], function(ko, $) { 
    var ctor = function() {
        var self = this;
        self.module = ko.observable();
        
        self.hide = function(elem) { 
            if (elem.nodeType === 1) {
                $(elem).slideUp(function() { 
                    $(elem).remove(); 
                });
            } 
        };
    };
    
    return ctor;
});