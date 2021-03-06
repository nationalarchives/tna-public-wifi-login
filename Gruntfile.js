module.exports = function (grunt) {

    //project config
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        eslint: {
            target: ["src/app.js"],
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
                    "js/app.js" : "src/app.js"
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'js/lib/vue.min.js':'js/lib/vue.js',
                    'js/app.min.js':'js/app.js'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/app.js'],
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
    grunt.registerTask('default', ['eslint', 'babel', 'uglify', 'sass', 'cssmin', 'watch']);
};