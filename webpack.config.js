var nib = require('nib');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
	    loaders: [
	        //{test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1', 'postcss')}
	        {test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css!stylus')}
	    ]
	},

	plugins: [
        new ExtractTextPlugin("styles.css", {allChunks: true})
    ],

	stylus: {
      use: [nib()],
      import: ['~nib/lib/nib/index.styl']
    },
    

    /*
	postcss: [
      require('postcss-import')(),
      require('postcss-simple-vars')({silent: false}),
      require('postcss-nested')(),
      require('postcss-short-size')(),
      require('postcss-position')(),
      require('postcss-hexrgba')(),
      require('postcss-pxtorem')(),
      require('postcss-color-function')(),
      require('postcss-url')({url: 'rebase'}),
      require('autoprefixer')()
    ]*/
};