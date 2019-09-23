const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    module : {
        rules = [
            {
                test: /\.html$/,
                options: { minimize: true}
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html", 
            filename: "./index.html"
        }),
    ]
}