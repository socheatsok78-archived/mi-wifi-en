const mix = require('laravel-mix');

/**
 * Compiling scripts
 */
mix.js('src/background.js', 'dist/');

/**
 * Copying Manifest.json
 */
mix.copy('src/manifest.json', 'dist/')
   .copy('src/icon.png', 'dist/');

/**
 * Copying Extension Pages
 */
mix.copy('src/popup.html', 'dist/');

/**
 * Laravel Mix Configurations
 */
mix.webpackConfig({
  resolve: {
    alias: {
      /**
       * SDK
       */
      'SDK': path.resolve(__dirname, 'src/sdk')
    }
  }
});
