var gulp = require('gulp');
var gp_concat = require('gulp-concat');
var gp_uglify = require('gulp-uglify');
var gp_rename = require('gulp-rename');

var srcFolder = 'app/';
var destFolder = 'app/reference/';

gulp.task('default', function () {
    return gulp.src([
        srcFolder + "infrastructure/constant.js",
        srcFolder + "infrastructure/errorHandler.js",
        srcFolder + "infrastructure/serviceClientManager.js",
        srcFolder + "infrastructure/services/securityService.js",
        srcFolder + "infrastructure/services/module1Service.js",
        srcFolder + "infrastructure/services/module2Service.js",
        srcFolder + "infrastructure/services/module3Service.js",
        srcFolder + "infrastructure/directives/dummyDirective.js",
        srcFolder + "modules/Common/controllers/shellCtrl.js",
        srcFolder + "modules/Common/controllers/mainCtrl.js",
        srcFolder + "modules/Common/controllers/menuCtrl.js",
        srcFolder + "modules/Security/controllers/loginCtrl.js",
        srcFolder + "modules/Security/controllers/logoutCtrl.js",
        srcFolder + "modules/Module1/controllers/module1Ctrl.js",
        srcFolder + "modules/Module2/controllers/module2Ctrl.js",
        srcFolder + "modules/Module3/controllers/module3Ctrl.js",
        srcFolder + "bootstrapper.js"
    ])
        .pipe(gp_concat('MyApp.js'))
        .pipe(gulp.dest(destFolder))
        .pipe(gp_rename('MyApp.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest(destFolder));
});