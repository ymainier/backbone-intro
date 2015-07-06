module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.initConfig({
		handlebars : {
			compile : {
				options : {
					commonjs : true,
					processName : function (name) {
						return name.replace("templates/", "").replace(".hbs", "");
					}
				},
				src : "templates/**/*.hbs",
				dest : "js/templates.js"
			}
		},

		browserify : {
			app : {
				src : ['./js/application.js'],
				dest : "./dist/application.js"
			}
		}
	});
};
