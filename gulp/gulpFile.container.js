var gulp = require('gulp');
var spawn = require('child_process').exec;



function DockerCommands(action) {
    var p = null;
    if(process.platform === 'win32'){
        p = spawn('PowerShell.exe -executionpolicy remotesigned -File .\\dockerTask.ps1 -' + action + ' -Environment debug',[ ] );
    } else {
        p = spawn('/bin/bash -c ./dockerTask.sh '+ action + ' debug',[ ] );
    }

    p.stdout.on('data', function(data) {
        console.log(data.toString());
    });

    p.stderr.on('data', function(data) {
        console.error(data.toString());
    });

    p.on('close', function(code) {
        console.log('Exited w/ code: '+ code);
    });
}

gulp.task('container-clean', function(callback) {
    DockerCommands('clean');
});

gulp.task('container-composeDebug', function(callback) {
    DockerCommands('composeForDebug');
});

gulp.task('container-compose', function(callback) {
    DockerCommands('compose');

});

gulp.task('container-build', function(callback) {
    DockerCommands('build');
});
