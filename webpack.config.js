module.exports = {
    entry: [
        './src/main.js'
    ],
    output: {
        filename: 'build.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_nodukles/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};