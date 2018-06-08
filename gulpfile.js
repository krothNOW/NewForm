var gulp = require("gulp");

gulp.task("hello", function() {
  return new Promise(function(resolve, reject) {
    console.log("Hello Zell");
    resolve();
  });
});

var browserSync = require("browser-sync").create();

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "NewForm"
    }
  });
});
