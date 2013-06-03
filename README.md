# grunt-wintersmith-compile

> A grunt task for "wintersmith build" command.

<!--

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-wintersmith-compile - -save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wintersmith-compile');
```

-->

## The "wintersmith_compile" task

### Overview
In your project's Gruntfile, add a section named `wintersmith_compile` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  wintersmith_compile: {
    your_target: {
      config: 'path/to/config.json',
      output: 'path/to/build'
    },
  },
})
```

### Options

#### options.config
Type: `String`
Default value: `'config.json'`

A string value that is a path to config.json.

#### options.output
Type: `String`
Default value: `'build'`

A string value that is used to output the html, css, js, images etc.

### Usage Examples

#### Default Options
```js
grunt.initConfig({
  wintersmith_compile: {
    your_target: {}
  },
})
```

#### Custom Options

```js
grunt.initConfig({
  wintersmith_compile: {
    your_target: {
      config: 'path/to/config.json',
      output: 'path/to/build'
    }
  },
})
```

## Release History
_(Nothing yet)_
