module.exports = function(grunt) {
  // 1. Configs
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // 2. configs
     watch: {
      scripts: {
   	files: ['js/*..js'],
	tasks: ['conncat', 'uglify'],
	options: {
	  spawn: false,
 	},
      },
      css: {
	files: ['css/*.scss'],
	task: ['sass'],
	options: {
	  spawn: false,
	}
       }
     },
     sass: {
	dist: {
	  options: {
	    style: 'compressed'
	  },
	  files: {
	    'css/build/global.scss': 'css/global.scss'
	  }
	}
     }, 
     concat: {
      dist: {
    	src: [
	    'js/libs/*.js'
	],
	dest: 'js/build/production.js'
      } 
    },
    uglify: {
	build: {
	  src: 'js/build/production.js',
	  dest: 'js/build/production.js',
	}
    },
    imagemin: {
      dynamic: {
	files: [{
	  expand: true,
	  cwd: 'images/',
	  src: ['**/*.{png,jpg,gif}'],
	  dest: 'images/build/'
	}]
      }
    }
  });

  // 3. Plug-in
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //4. Commands
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);
}






