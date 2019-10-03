let isProd = process.env.NODE_ENV === 'production';
let path = require('path');

let config = {
	productionSourceMap: false,
	configureWebpack: config => {
		return {
			devServer: {
				historyApiFallback: true,
				overlay: true,
				proxy: {
					'/data': {
						target: 'https://min-api.cryptocompare.com',
						secure: false,
						changeOrigin: true
					}
				}
			},
			resolve: {
				alias: {
					'~': path.resolve(__dirname, 'src')
				}
			}
		}
	}
};

module.exports = config;