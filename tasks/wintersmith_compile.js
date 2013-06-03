/*
 * grunt-wintersmith-compile
 * https://github.com/vohedge/grunt-wintersmith-compile
 *
 * Copyright (c) 2013 vohedge
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	var wintersmith	= require('wintersmith');
	var fs			= require("fs");
	var path		= require("path");

	grunt.registerMultiTask('wintersmith_compile', 'Just run "wintersmith build"', function() {
		var options, cwd, config, configDir, output, rawOutput, done, env;

		// Default option value
		options	= this.options({
			config: 'config.json',
			output: 'build'
		});

		// Set config.json path
		config	= path.resolve(options.config);
		if (!fs.existsSync(config)) {
			grunt.fail.warn('"config.json" is not found: ' + config);
		}
		grunt.log.writeln('config: ' + config);

		// Set output path
		// Default path is the same directory to config.json
		rawOutput = grunt.config.get([this.name, this.target, 'options', 'output']);
		if (!rawOutput) {
			configDir = path.dirname(config);
			output = configDir + '/' + options.output;
		} else {
			output = path.resolve(options.output);
		}
		grunt.log.writeln('output: ' + output);

		// Wintersimith Build
		env		= wintersmith(config);
		done	= this.async();
		env.build(output, function(error) {
			if (error) {
				grunt.warn(error);
			}
			grunt.log.writeln('Done!');
			done();
		});
	});
};
