const mix = require('laravel-mix');
const path = require('path')

  module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif|pdf)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  };

mix.js('resources/js/app.js', 'public/js')
.postCss('resources/css/app.css', 'public/css', [
    require("tailwindcss"),
]);

mix.sass('resources/sass/app.scss', 'public/css')
