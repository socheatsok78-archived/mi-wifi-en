const mix = require('laravel-mix');
mix.disableNotifications();

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
      'Lang': path.resolve(__dirname, 'src/lang'),

      /**
       * SDK
       */
      'Services': path.resolve(__dirname, 'src/services'),

      /**
       * SDK
       */
      'Translations': path.resolve(__dirname, 'src/translations'),

      /**
       * SDK
       */
      'SDK': path.resolve(__dirname, 'src/sdk'),
    }
  }
});
