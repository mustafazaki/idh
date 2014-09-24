locale = "_en";
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),


            watch: {
                files: ['**/*.css','**/*.js', '**/*.html'],
			options: {
					livereload: true

				}
            },
            copy: {
                main: {
                    src: 'Common/sass/default.css',
                    dest: 'C:/wamp/www/wordpress/wp-content/themes/cake/'
                }
            }

        });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['grunt-contrib-watch']);
};