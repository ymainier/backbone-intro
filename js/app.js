var Backbone = require("backbone");
var _ = require("underscore");
var $ = require("jquery");
var Handlebars = require("handlebars");
var JST = require("./templates")(Handlebars);

var PoiModel = Backbone.Model.extend({});
var PoiCollection = Backbone.Collection.extend({
  model: PoiModel
});

var HomeView = Backbone.View.extend({
  render: function() {
    this.$el.html(JST["home"]);
  }
});

var AboutView = Backbone.View.extend({
  render: function() {
    this.$el.html(JST["about"]);
  }
});

var PoiCollectionView = Backbone.View.extend({
  render: function() {
    this.$el.html(JST["pois/index"]({models: this.collection.toJSON()}));
  }
});

var PoiModelView = Backbone.View.extend({
  render: function() {
    this.$el.html(JST["pois/show"](this.model.toJSON()));
  }
});

var poiCollection = new PoiCollection([
  {id: 1, name: "Tour Eiffel", cotation: 3},
  {id: 2, name: "Arc de Triomphe", cotation: 3},
  {id: 3, name: "Musée national de Céramique", cotation: 2},
  {id: 4, name: "Musée français de la Carte à Jouer", cotation: 1}
]);

var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "about": "about",
    "pois": "poisIndex",
    "pois/:id": "poisShow"
  },

  home: function() {
    var homeView = new HomeView();
    homeView.render();
    $('#container').html(homeView.el);
    console.log("home route");
  },

  about: function() {
    var aboutView = new AboutView();
    aboutView.render();
    $('#container').html(aboutView.el);
    console.log("about route");
  },

  poisIndex: function() {
    var poiCollectionView = new PoiCollectionView({
      collection: poiCollection
    });
    poiCollectionView.render();
    $('#container').html(poiCollectionView.el);
    console.log("poisIndex route");
  },
  poisShow: function(id) {
    var model = poiCollection.find(function (poi) {
      return poi.id === +id;
    });
    var poiModelView = new PoiModelView({
      model: model
    });
    poiModelView.render();
    $('#container').html(poiModelView.el);
    console.log("poisShow route " + id);
  },
});

Handlebars.registerHelper('stars', function(count) {
  var stars = "";
	_.times(count, function () {
    stars += "&#9733;";
	});
  return new Handlebars.SafeString(stars);
});

module.exports.Router = Router;
