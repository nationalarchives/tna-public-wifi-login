module.exports = function (grunt) {

    //project config
    grunt.initConfig({
        pkg:grunt.file.read.JSON('package.json'),
        eslint: {
            target: "src/app.js",
            options: {
                configFile: 'conf/eslint.json'
            }
        },
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/app.js": "src/app.js"
                }
            }
        },
        qunit: {
            all: ['tests/**/*.html']
        },
        watch: {
            scripts: {
                files: ['src/app.js', 'tests/test.js'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            }
        }
    });

    //Load the plugins
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Default Grunt tasks
    grunt.registerTask('default', ['eslint', 'babel','watch']);
};