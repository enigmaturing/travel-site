var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'), //feature I want to use with postcss in the function of the gulp task 'styles'
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import')

gulp.task('default', function(){
    console.log("Hurra! Has cread una nueva tarea de gulp!")
})

gulp.task('html', function(){
    console.log("Imagine something useful being done to your html here")
})

gulp.task('styles', function(){
    // console.log("Imagine Sass or Post CSS tasks running here")
    
    // gulp will run this javascript function after having made changes in css
    // we MUST include return here, because src is a asyncronous function
    // and gulp is aware, when the function src is completed.
    return gulp.src('./app/assets/styles/styles.css')
                .pipe(postcss([cssImport, cssvars, nested, autoprefixer])) //postcss expcets an array of features, that's why we include brackets [] ORDERR OF FEATURES MATTERS!!!
                .pipe(gulp.dest('./app/temp/styles'))
})

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    })

})