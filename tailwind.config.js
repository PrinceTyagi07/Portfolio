/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// webpack.config.js

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // Other configurations...
  module: {
    rules: [
      // Other rules...
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        // Add this rule to ignore source map warnings
        enforce: 'pre',
        use: 'source-map-loader',
        exclude: /bootstrap\.min\.css$/
      }
    ],
  },
};
