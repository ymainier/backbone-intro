module.exports = function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Alors la, c'est la page about</h1>\n<p>Il y a plein d'info utile, c'est génial.</p>\n<a href=\"#\">Home</a>\n<a href=\"#pois\">Pois</a>\n\n";
},"useData":true});

this["JST"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Backbone introduction</h1>\n<p>A quick introduction to a popular javascript MVC library</p>\n<a href=\"#about\">About</a>\n<a href=\"#pois\">Pois</a>\n\n";
},"useData":true});

this["JST"]["pois/index"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<li><a href=\"#pois/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Nos points d'intérêts</h1>\n<ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.models : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n<a href=\"#\">Home</a>\n<a href=\"#about\">About</a>\n\n";
},"useData":true});

this["JST"]["pois/show"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<h1>"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n<p>"
    + alias2((helpers.stars || (depth0 && depth0.stars) || alias1).call(depth0,(depth0 != null ? depth0.cotation : depth0),{"name":"stars","hash":{},"data":data}))
    + "</p>\n<a href=\"#\">Home</a>\n<a href=\"#pois\">Pois</a>\n<a href=\"#about\">About</a>\n\n";
},"useData":true});

return this["JST"];

};