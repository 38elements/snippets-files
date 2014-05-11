(function (console) {
    console.show_service = function(service_name) {
        var injector = angular.element(document).injector();
        window[service_name] = injector.get(service_name);
    };
    console.show_controller = function(scope_elem, name) {
        if (typeof scope_elem === "string") {
            scope_elem = document.getElementById(scope_elem);
        }
        window[name] = angular.element(scope_elem).scope();
    }
})(console);
