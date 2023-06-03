var fsExtra = require('fs-extra');
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var config = require('../webpack.config');
var ZipPlugin = require('zip-webpack-plugin');
var extract = require('extract-zip');
delete config.chromeExtensionBoilerplate;

config.mode = 'production';

var packageInfo = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

config.plugins = (config.plugins || []).concat(
  new ZipPlugin({
    filename: `${packageInfo.name}-${packageInfo.version}.zip`,
    path: path.join(__dirname, '../zip'),
    pathPrefix: false,
  })
);

var compiler = webpack(config);

compiler.run(function (err, stats) {
  if (err) throw err;

  // Copy the generated files to the zip folder
  fsExtra.copySync(config.output.path, path.join(__dirname, '../zip'));

  console.log('Build complete.');
});

webpack(config, function (err, stats) {
  if (err) throw err;

  // Copy the generated files to the zip folder
  fsExtra.copySync(config.output.path, path.join(__dirname, '../', 'zip'));

  console.log('Build complete.');

  // Extract the zip file contents to the build folder
  var zipFilePath = path.join(__dirname, '../', 'zip', `${packageInfo.name}-${packageInfo.version}.zip`);
  var buildFolderPath = path.join(__dirname, '../', 'build');

  extract(zipFilePath, { dir: buildFolderPath }, function (err) {
    if (err) throw err;
    console.log('Zip file contents extracted to the build folder.');
  });
});