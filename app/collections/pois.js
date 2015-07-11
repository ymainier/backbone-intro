var Backbone = require("backbone");
var PoiModel = require("../models/poi");

module.exports = Backbone.Collection.extend({
	model: PoiModel
});

