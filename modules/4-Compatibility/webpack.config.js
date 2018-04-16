const path = require('path');

module.exports = {
	entry: './src/principal.js',
	output: {
      	path: path.resolve(__dirname, 'dist'),
    	filename: 'bundle.js'
  	},
  	module: {
	  rules: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
	  ]
	},
	mode: 'development'
};