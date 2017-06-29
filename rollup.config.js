// rollup.config.js
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js'
export default {
    entry: 'src/time-ago.js',
    format: 'umd',
    moduleName:'timeago',
    plugins: [
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        uglify({}, minify)
    ],
    dest: 'dist/time-ago.min.js', // equivalent to --output
    sourceMap: true
};
