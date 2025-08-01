// gulpfile.js
const gulp = require("gulp");
const gulpSass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");
const smoothie = require("smoothie-js");
const browserSync = require("browser-sync").create();

gulp.task("sass", async function () {
  return gulp
    .src("scss/**/*.scss")
    .pipe(gulpSass().on("error", gulpSass.logError))
    .pipe(cssnano())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 versions"],
        cascade: false,
      })
    )
    .pipe(gulp.dest("app/css/dist/"))
    .pipe(browserSync.stream());
});

gulp.task("compress", async function () {
  return gulp.src("app/js/*.js").pipe(uglify()).pipe(gulp.dest("app/js/dist/"));
});

gulp.task("autoprefix", async function () {
  return gulp
    .src("scss/**/*.scss")
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 versions"],
        cascade: false,
      })
    )
    .pipe(gulp.dest("app/css/dist/"));
});

gulp.task("smoothie", async function () {
  return gulp
    .src("node_modules/smoothie-js/dist/smoothie.min.js")
    .pipe(gulp.dest("app/lib/smoothie"));
});

gulp.task(
  "serve",
  gulp.series("sass", async function () {
    browserSync.init({
      server: "./app",
    });

    gulp
      .watch("app/js/*.js", gulp.series("compress"))
      .on("change", browserSync.reload);
    gulp
      .watch("scss/**/*.scss", gulp.series("sass"))
      .on("change", browserSync.reload);
    gulp.watch("app/*.html").on("change", browserSync.reload);
  })
);

gulp.task("default", gulp.series("serve", "smoothie"));
