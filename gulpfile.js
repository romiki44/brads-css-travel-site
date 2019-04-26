const gulp=require('gulp');
const watch=require('gulp-watch');
const postcss=require('gulp-postcss');
const autoprefixer=require('autoprefixer');
const cssvars=require('postcss-simple-vars');
const nested=require('postcss-nested');
const cssimport=require('postcss-import');

gulp.task('default', ()=> {
    console.log('Welcome Gulp');
});

gulp.task('html', ()=>{
    console.log('html touched...');
});

gulp.task('styles', ()=>{
    //console.log('css touched...');
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', ()=> {
    
    watch('./app/index.html', ()=>{
        gulp.start('html');
    });

    watch('./app/assets/**/*.css', () => {
        gulp.start('styles');
    });
});