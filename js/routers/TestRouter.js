var TestRouter = Backbone.Router.extend({

    routes: {
        "routeA" : "routeA",
        "routeB" : "routeB"
    },

    routeA: function() {
        console.log("routeA");
    },

    routeB: function() {
        console.log("routeB");
    }

});

$(function(){

    var route = "A";

    var testRouter = new TestRouter();

    var switchRoute = function() {
        console.log("going route"+route);
        console.log(window.location.search);
        testRouter.navigate("route"+route);
        route = route == "A" ? "B" : "A";
//        setTimeout(switchRoute, 2000);
    };

    Backbone.history.start();

    setTimeout(switchRoute, 2000);
});


