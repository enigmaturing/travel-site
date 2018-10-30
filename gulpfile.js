var gulp = require('gulp'),
watch = require('gulp-watch')

gulp.task('default', function(){
    console.log("Hurra! Has cread una nueva tarea de gulp!")
})

gulp.task('html', function(){
    console.log("Imagine something useful being done to your html here")
})

gulp.task('styles', function(){
    console.log("Imagine Sass or Post CSS tasks running here")
})

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    })

})