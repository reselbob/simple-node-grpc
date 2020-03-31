module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'main.js',
        libraryTarget: 'var',
        library: 'SimpleService'
    },
    node: {
        fs: "empty",
        child_process: "empty"
    }
};