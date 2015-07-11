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

	mainContainer : "#container",

	renderBaseRoute : function (ViewClass, configuration) {
		var view = new ViewClass(configuration || {});
		view.render();
		$(this.mainContainer).html(view.el);
	},

	home: function() {
		this.renderBaseRoute(HomeView);
	},

	about: function() {
		this.renderBaseRoute(AboutView);
	},

	poisIndex: function() {
		this.renderBaseRoute(PoiCollectionView, {
			collection: poiCollection
		});
	},
	poisShow: function(id) {
		var model = poiCollection.find(function (poi) {
			return poi.id === +id;
		});
		this.renderBaseRoute(PoiModelView, {
			model: model
		});
	},
});

