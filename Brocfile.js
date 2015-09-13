var path = require('path');
var babel = require('broccoli-babel-transpiler');
var funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var browserify = require('broccoli-browserify');

var appJs = babel('src', {
  browserPolyfill: true
});

appJs = browserify(appJs, {
  entries: ['./index.js'],
  outputFile: '/dist/js/app.js'
});

var index = funnel('src', {files: ['index.html']});

module.exports = mergeTrees([index, appJs]);
