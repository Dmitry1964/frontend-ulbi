import { buildLoaders } from './buildLoaders';
import { buildResorves } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import webpack from 'webpack';
import { BuildOptions } from './types/types';
import { buildDevServer } from './buildDevServer';


export const buildWebpackConfig = (options : BuildOptions) :webpack.Configuration => {
    const {mode, paths, isDev} = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash:4].js',
            path: paths.output,
            clean: true,
        },
    
        plugins: buildPlugins(options),
    
        module: {
            rules: buildLoaders(options),
        },
    
        resolve: buildResorves(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }

}