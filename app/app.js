var Backbone = require("backbone");
var _ = require("underscore");
var Handlebars = require("handlebars");
var $ = require("jquery");
var Router = require("./router");

Handlebars.registerHelper('stars', function(count) {
  var stars = "";
	_.times(count, function () {
    stars += "&#9733;";
	});
  return new Handlebars.SafeString(stars);
});

$(function () {
	new Router();
	Backbone.history.start();
});

