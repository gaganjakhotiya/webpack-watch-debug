const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const OUTPUT_PATH = path.join(__dirname, 'build')

module.exports = {
    entry: {
        index: './src/index'
    },
    output: {
        path: OUTPUT_PATH,
        filename: '[name].js',
    },
    plugins: [
        new webpack.WatchIgnorePlugin([OUTPUT_PATH]),

        function () {
            this.plugin('done', function (stats) {
                fs.writeFileSync(
                    path.join(OUTPUT_PATH, 'stats.json'),
                    JSON.stringify(stats.toJson())
                );

                process.stdout.write("\n---------------- DONE ----------------\n")
            });
        }
    ],
}
