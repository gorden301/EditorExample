module.exports = function (grunt) {
    var taskCfg = grunt.file.readJSON('gruntCfg.json');
    grunt.initConfig(taskCfg);
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    //grunt.registerTask('build', 'require demo', function () {
    //    var tasks = ['requirejs'];
    //    var srcDir = 'editor';
    //    var destDir = 'dest';
    //    grunt.config.set('config', {
    //        srcDir: srcDir,
    //        destDir: destDir
    //    });
    //    var taskCfg = grunt.file.readJSON('gruntCfg.json');
    //    var options = taskCfg.requirejs.main.options,
    //        platformCfg = options.web,
    //        includes = platformCfg.include,
    //        paths = options.paths;
    //    var requireTask = taskCfg.requirejs;
    //    options.path = paths;
    //    options.out = platformCfg.out;
    //    options.include = includes;
    //    grunt.task.run(tasks);
    //    grunt.config.set("requirejs", requireTask);
    //});
    grunt.registerTask('default','requirejs');
}