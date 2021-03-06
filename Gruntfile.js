/* global module:false */
module.exports = function(grunt) {
    var _ = require('lodash');

    var config = {
        pkg: grunt.file.readJSON('package.json'),
        config: {
            src: {
                // directory where revealjs is installed.
                reveal: 'reveal.js',
                // pattern that matches slides.
                slides: 'src/00/**/*.markdown'
            },
            // Themes related configuration.
            // All following options are used to auto-detect and generate themes.
            themes: {
                // where to store compiled css.
                css: 'css/theme',
                // reveal.js themes directory.
                // default leverage `config.src.reveal` configuration
                reveal: '<%= config.src.reveal %>/css/theme/source',
                // Your custom themes directory
                custom: '<%= config.themes.css %>/source'
            }
        }
    };


    // Project configuration
    grunt.initConfig(_.merge(config, {
        index: {
            options: {
                // template to use
//                template: 'index.tpl',
                // default theme for presentation
                // It remains possible to change it using the querystring.
                theme: 'uda',
                // An array of extra scripts to include.
                scripts: [ 'scripts/runnable.js', 'scripts/dom-samples.js' ],
                // An array of extra stylesheets to include
                // styles: [ '//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css' ],
                styles: [ 'font-awesome/css/font-awesome.css' ],
                // Slidedeck title
                // This is used as cover slide title and as html title.
                title: 'Front-end',
                // Description meta.
                // default value is extracted from `package.json`
//                description: '',
                // Slides author.
                // default value is extracted from `package.json`
//                author: { name: '', url: '', email: ''},
                // twitter username
                // If provided, will be displayed after author name.
                twitter: 'themouette',
                // cover slide image url.
                // This image is inserted between title and credits.
                // example value 'img/jslogo.jpg'
                cover: 'img/frontend-logos.png'
            },

            lesson1: {
                options: {
                    title: 'Inside Browserland',
                    cover: 'img/01/html-sticker.png'
                },
                files: [
                    {src: 'src/01/**/*.markdown', dest: 'lesson1.html'}
                ]
            },
            lesson2: {
                options: {
                    title: 'Javascript Language',
                    cover: 'img/jslogo.jpg'
                },
                files: [
                    {src: 'src/02/**/*.markdown', dest: 'lesson2.html'}
                ]
            },
            lesson3: {
                options: {
                    title: 'Async Common Patterns',
                    // An array of extra scripts to include.
                    scripts: [
                        // XMLHttpRequest Diagram
                        'scripts/raphael.js',
                        'scripts/underscore.js',
                        'scripts/sequence-diagram.js',
                        'scripts/diagrams.js',

                        'scripts/runnable.js',
                        'scripts/dom-samples.js'
                    ]
                },
                files: [
                    {src: 'src/03/**/*.markdown', dest: 'lesson3.html'}
                ]
            },
            lesson4: {
                options: {
                    title: 'Styling',
                    cover: 'img/04/logo_css3.png'
                },
                files: [
                    {src: 'src/04/**/*.markdown', dest: 'lesson4.html'}
                ]
            },
            lesson5: {
                options: {
                    title: 'Single page App'
                },
                files: [
                    {src: 'src/05/**/*.markdown', dest: 'lesson5.html'}
                ]
            },
            lesson6: {
                options: {
                    title: 'Testing and tools'
                },
                files: [
                    {src: 'src/06/**/*.markdown', dest: 'lesson6.html'}
                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.',
                    hostname: '0.0.0.0'
                }
            }
        },
        concurrent: {
            dev: {
                tasks: ['watch:themes', 'watch:index', 'connect:server:keepalive'],
                options: {
                    logConcurrentOutput: true,
                    limit: 3
                }
            }
        }
    }));

    grunt.loadTasks('./grunt_tasks');

    grunt.loadNpmTasks( 'grunt-contrib-connect' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-concurrent' );
    grunt.loadNpmTasks( 'grunt-sass' );

    grunt.registerTask('build:dev', ['themes:dev', 'index:dev']);
    grunt.registerTask('build:release', ['themes:release', 'index:release']);

    grunt.registerTask( 'dev', [ 'build:dev', 'concurrent:dev' ] );
    grunt.registerTask( 'release', [ 'build:release' ] );
    grunt.registerTask( 'serve', [ 'connect:server:keepalive' ] );

    grunt.registerTask( 'default', [ 'dev' ] );
};
