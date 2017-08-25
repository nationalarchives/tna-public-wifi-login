module.exports = function (grunt) {

    //project config
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify: {
            target: {
                files: {
                    'js/scripts.min.js': 'js/scripts.js'
                }
            }
        },
        eslint: {
            target: "src/scripts.js",
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
                    "js/scripts.js": "src/scripts.js"
                }
            }
        },
        qunit: {
            all: ['js/tests/**/*.html']
        },
        watch: {
            scripts: {
                files: ['src/scripts.js', 'tests/test.js'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: 'css/sass/*.scss',
                tasks: ['sass', 'cssmin']
            }
        },
        sass: {
            build: {
                files: [{
                    src: ['css/sass/tnaWifi.scss'],
                    dest: 'css/tnaWifi.css'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        }
    });

    //Load the plugins
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //Default Grunt tasks
    grunt.registerTask('default', ['eslint', 'babel', 'sass', 'cssmin', 'uglify', 'watch']);
};