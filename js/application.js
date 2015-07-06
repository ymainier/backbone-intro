var Backbone = require("backbone");
var Router = require("./app").Router;
var $ = require("jquery");

$(function () {
	console.log("HERE ?");
	new Router();
	Backbone.history.start();
});
