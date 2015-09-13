var path = require('path');
var babel = require('broccoli-babel-transpiler');
var fastBrowserify = require('broccoli-fast-browserify');
var funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

var app = babel('src', {
  browserPolyfill: true
});

app = fastBrowserify(app, {
  bundles: {
    './dist/js/app.js': {
      entryPoints: ['./index.js']
    }
  }
});

var index = funnel('src', {files: ['index.html']});

var sourceTrees = [app, index];

module.exports = mergeTrees(sourceTrees);
