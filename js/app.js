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


$(function() {
  var homeView = new HomeView();
  homeView.render();
  $('#container').html(homeView.el)
});
