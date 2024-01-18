const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Use dynamic import for gulp-imagemin
const imagemin = () => import('gulp-imagemin');

// Transpile JavaScript
gulp.task('babel', () =>
    gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
);

// Compile SCSS to CSS
gulp.task('sass', () =>
    gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'))
);

// Concatenate and minify JavaScript
gulp.task('scripts', () =>
    gulp.src('dist/**/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'))
);

// Optimize images
gulp.task('images', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
);

// Default task
gulp.task('default', gulp.series('babel', 'sass', 'scripts', 'images'));

// Watch task
gulp.task('watch', () => {
    gulp.watch('src/**/*.js', gulp.series('babel', 'scripts'));
    gulp.watch('src/**/*.scss', gulp.series('sass'));
    gulp.watch('src/images/*', gulp.series('images'));
});
// next.config.js
module.exports = {
    images: {
      domains: ['m.media-amazon.com'],
    },
  };
  