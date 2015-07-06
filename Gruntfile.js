module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.initConfig({
		handlebars : {
			compile : {
				options : {
					processName : function (name) {
						return name.replace("templates/", "").replace(".hbs", "");
					}
				},
				src : "templates/**/*.hbs",
				dest : "js/templates.js"
			}
		}
	});
};
