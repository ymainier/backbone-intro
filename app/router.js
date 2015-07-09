var Backbone = require("backbone");
var $ = require("jquery");
var PoiCollection = require("./collections/pois");
var HomeView = require("./views/home");
var AboutView = require("./views/about");
var PoiCollectionView = require("./views/pois/index");
var PoiModelView = require("./views/pois/show");

var poiCollection = new PoiCollection([
  {id: 1, name: "Tour Eiffel", cotation: 3},
  {id: 2, name: "Arc de Triomphe", cotation: 3},
  {id: 3, name: "Musée national de Céramique", cotation: 2},
  {id: 4, name: "Musée français de la Carte à Jouer", cotation: 1}
]);

module.exports = Backbone.Router.extend({
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

