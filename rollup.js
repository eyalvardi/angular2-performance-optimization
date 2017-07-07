import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

export default {
    entry: 'dist/tsc-out/app/main-aot.js',
    dest : 'dist/build.js',
    sourceMap: true,
    sourceMapFile: 'dist/build.js.map',
    format: 'iife',
    plugins: [
        nodeResolve({jsnext: true, module: true}),
        commonjs({
            include: 'node_modules/rxjs/**'
        }),
        uglify()
    ]
}
