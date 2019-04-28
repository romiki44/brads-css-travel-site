const gulp=require('gulp');
const watch=require('gulp-watch');
const browserSync=require('browser-sync').create();

gulp.task('watch', ()=> {
    
    browserSync.init({
        //notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', ()=>{
        browserSync.reload();
    });

    watch(['./app/assets/**/*.scss', './app/assets/**/*.css'], () => {
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});

//priklad
gulp.task('default', ()=> {
    console.log('Welcome Gulp');
});