var Backbone = require("backbone");
var Handlebars = require("handlebars");
var JST = require("../templates")(Handlebars);

module.exports = Backbone.View.extend({
  render: function() {
    this.$el.html(JST["about"]);
  }
});

