/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

// in case babel has a production-specific configuration
process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This could take a moment.'));

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        // error occurred. stop here.
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
        return jsonStats.warning.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack stats: ${stats}`);

    console.log(chalk.green('App built and written to /dist'));

    return 0;
});
