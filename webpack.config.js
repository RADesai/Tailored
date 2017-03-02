var path = require('path');

module.exports = {
 context: path.join(__dirname, 'src'),
 entry: [
   './index.js',
 ],
 output: {
   path: path.join(__dirname, 'www'),
   filename: 'bundle.js',
 },
 module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loaders: ['babel'],
     },
     { test: /\.css$/, loader: "style-loader!css-loader" },
     {
      test: /\.(?:png|jpg|svg)$/,
      loader: 'url-loader',
      query: { limit: 10000 }
    }
   ]
 },
 resolveLoader: {
   root: [
     path.join(__dirname, 'node_modules'),
   ],
 },
 resolve: {
   root: [
     path.join(__dirname, 'node_modules'),
   ],
 },
};
