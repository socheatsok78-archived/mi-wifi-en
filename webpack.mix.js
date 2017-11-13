const mix = require('laravel-mix');

const PUBLIC_PATH = 'dist';

/**
 * Set public path
 */
mix.setPublicPath(PUBLIC_PATH);

/**
 * Popup Asset
 */
mix.sass('src/sass/popup.scss', 'css');
mix.js('src/script/popup.js', 'js');

/**
 * Vendor Assets
 */
mix.sass('src/sass/vendor.scss', 'css');
