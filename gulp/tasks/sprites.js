const gulp=require('gulp');
const svgSprite=require('gulp-svg-sprite') ;
const rename=require('gulp-rename');
const del=require('del');

var config={
    shape: {
      spacing: {
        padding: 1
      }
    },
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
              css: {
                template: './gulp/templates/sprite.csstemp'
              }
            }
        }
    }
};

gulp.task('beginClean', function() {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCss', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.scss'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCss'], function() {
  return del(['./app/temp/sprite']);
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCss', 'endClean']);
