module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.initConfig({
		handlebars : {
			compile : {
				options : {
					commonjs : true,
					processName : function (name) {
						return name.replace("app/templates/", "").replace(".hbs", "");
					}
				},
				src : "app/templates/**/*.hbs",
				dest : "app/templates.js"
			}
		},

		browserify : {
			app : {
				src : ['./app/app.js'],
				dest : "./dist/app.js"
			}
		}
	});
};
