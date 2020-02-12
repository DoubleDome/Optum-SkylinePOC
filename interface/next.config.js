const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const compose = require('next-compose');
const CSS_CONFIG = {
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|otf|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        })
        return config
    }
}


// const images = 
// console.log(images)
// debugger
// const configs = {...images}

module.exports = compose([
    [withImages, {}],
    // [withCSS, CSS_CONFIG],
    {
        webpack:(config) => config
    }
])