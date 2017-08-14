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
            },
            css: {
                files: 'css/sass/*.scss',
                tasks: ['sass', 'cssmin']
            }
        },
        sass: {
            build: {
                files: [{
                    src: ['css/sass/main.scss'],
                    dest: 'css/main.css'
                }]
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'js/scripts.min.js': 'js/scripts.js'
                }
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
    grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'eslint', 'babel','watch']);
};