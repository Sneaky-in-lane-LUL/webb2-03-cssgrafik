const gulp = require('gulp');
const sass = require('gulp-sass');

/*
    -- TOP LEVEL FUNCTIONS
    gulp.task  - Define tasks
    gulp.src   - Points to files to use
    gulp.dest  - Points to folder output
    gulp.watch - Watch files and folders for changes
*/

//Logs message
gulp.task('message', function() {
    return console.log('Gulp fungerar');
})

//copy all HTML-files
gulp.task('copyhtml',function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('build'));
})
// Complie sass
gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'))
})


// standardkörning
gulp.task('default', ['copyhtml', 'sass'])

//Gulp Watch
gulp.task('watch', function() {
    gulp.watch('src/*.html', ['copyhtml']);
    gulp.watch('src/sass/*.scss', ['sass']);
})