// const path = require('path');

// module.exports = {
//   entry: './dermtsarray.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'webpack-dts.js',
//   },
// };
module.exports = {
    entry: './tessarray.js',
    output: {
      filename: './webpack-dts2.js',
      // export to AMD, CommonJS, or window
      libraryTarget: 'umd',
      // the name exported to window
      library: 'Tessarray'
    }
  };
  