import gulp from "gulp";
import babel from "gulp-babel";
import sass from "gulp-sass";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import imagemin from "gulp-imagemin";
import cleanCSS from "gulp-clean-css";

// Transpile JavaScript
gulp.task("babel", () =>
  gulp.src("src/**/*.js").pipe(babel()).pipe(gulp.dest("dist"))
);

// Compile SCSS to CSS
gulp.task("sass", () =>
  gulp.src("src/**/*.scss").pipe(sass()).pipe(gulp.dest("dist"))
);

// Concatenate and minify JavaScript
gulp.task("scripts", () =>
  gulp
    .src("dist/**/*.js")
    .pipe(concat("bundle.js"))
    .pipe(uglify())
    .pipe(gulp.dest("build"))
);

// Minify CSS
gulp.task("minify-css", () =>
  gulp.src("dist/**/*.css").pipe(cleanCSS()).pipe(gulp.dest("build"))
);

// Optimize images
gulp.task("images", () =>
  gulp.src("src/images/*").pipe(imagemin()).pipe(gulp.dest("build/images"))
);

// Default task
gulp.task(
  "default",
  gulp.series("babel", "sass", "scripts", "minify-css", "images")
);

// Watch task
gulp.task("watch", () => {
  gulp.watch("src/**/*.js", gulp.series("babel", "scripts"));
  gulp.watch("src/**/*.scss", gulp.series("sass", "minify-css"));
  gulp.watch("src/images/*", gulp.series("images"));
});
