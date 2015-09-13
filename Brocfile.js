var path = require('path');
var babel = require('broccoli-babel-transpiler');
var browserify = require('broccoli-browserify');
var funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

var vendor = 'node_modules';

var app = babel('src', {
  browserPolyfill: true
});

app = browserify(app, {
  entries: ['./index.js'],
  outputFile: '/dist/js/app.js'
});

var index = funnel('src', {files: ['index.html']});

var sourceTrees = [vendor, app, index];

module.exports = mergeTrees(sourceTrees);
