Epa.HomeRoute = Ember.Route.extend({

    model: function () {
        var homeModel = Epa.HomeModel.create();
        return homeModel;
    }
});
