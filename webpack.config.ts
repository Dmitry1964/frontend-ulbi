import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/types';


export default (env: BuildEnv) : webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, "public", "index.html")
    }
    
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;
    
    const config : webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    })
    return config    
}