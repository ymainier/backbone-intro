var HomeView = Backbone.View.extend({
  render: function() {
    // 1. Récupérer le contenu du template
    var template = $('#template-home').html();
    // 2. Le compiler en html
    var html = Handlebars.compile(template);
    // 3. L'insérer dans le DOM
    this.$el.html(html);
  }
});

var AboutView = Backbone.View.extend({
  render: function() {
    // 1. Récupérer le contenu du template
    var template = $('#template-about').html();
    // 2. Le compiler en html
    var html = Handlebars.compile(template);
    // 3. L'insérer dans le DOM
    this.$el.html(html);
  }
});

var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "about": "about"
  },

  home: function() {
    var homeView = new HomeView();
    homeView.render();
    $('#container').html(homeView.el)
    console.log("home route");
  },

  about: function() {
    var aboutView = new AboutView();
    aboutView.render();
    $('#container').html(aboutView.el)
    console.log("about route");
  },
});

$(function() {
  new Router();
  Backbone.history.start();
});
