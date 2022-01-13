const path= required("path");

module.exports = {
    entry: "./003UseTelefono.ts";
    module: {
        rules: {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/
        }
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js']
    },
    output: {
        filename: './build/bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}