let { src, dest } = require('gulp');
const sass    = require("gulp-sass")(require("sass"));

// Styles
const postcss = require('gulp-postcss');
const prefix = require('autoprefixer');
const minify = require('cssnano');
const rename = require('gulp-rename');

/**
 * Paths to project folders
 */

 var paths = {
	input: 'src/',
	output: '_site/',
	scripts: {
		input: 'src/assets/js/*',
		output: '_site/js/'
	},
	styles: {
		input: 'src/assets/scss/**/*.scss',
		output: '_site/css/',
    mainFile: 'src/assets/scss/main.scss'
	}
};


/* ==== generate the css with sass */

function css(){
  return src(paths.styles.mainFile)
  .pipe(sass({
    outputStyle: "expanded",
    sourceComments: true
  }))
  .pipe(postcss([
    prefix({
      cascade: true,
      remove: true
    })
  ]))
  .pipe(dest(paths.styles.output))
  .pipe(rename({suffix: ".min"}))
  .pipe(postcss([
    minify({
      discardComments: {
        removeAll: true
      }
    })
  ]))
  .pipe(dest(paths.styles.output));
}

exports.css = css;
