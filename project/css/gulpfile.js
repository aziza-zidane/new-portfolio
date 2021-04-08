var gulp = require("gulp"),
    pug = require("gulp-pug"),
    concat = require("gulp-concat"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer");
    gulp.task("html", function () {
        return gulp.src("project/html/*.pug")
            .pipe(pug({
                pretty: true
            }))
            .pipe(gulp.dest("dist"))
            
        
    });
    gulp.task("css", function () {
        return gulp.src(["project/css/**/*.css","project/css/**/*.scss"])
            .pipe(sass({
                outputStyle: "compressed"
            }))
            .pipe(autoprefixer())
           .pipe(concat("main.css"))
            .pipe(gulp.dest("dist/css"))
            
        
    });
gulp.task("js", function () {
    return gulp.src("project/js/*.js")
        .pipe(concat("mainjs.js"))
        .pipe(gulp.dest("dist/js"))
        
    })


gulp.task("watch", function () {
    // require("./server.js")
    gulp.watch("project/html/*.pug", gulp.series("html"));
    gulp.watch("project/js/*.js", gulp.series("js"));
    gulp.watch(["project/css/**/*.css","project/css/**/*.scss"] , gulp.series("css"));
        
});