    const path = require('path');

    module.exports = {
      mode: 'development', 
      entry: '../src/index.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader',"sass-loader",]
          },
          {
            test:/\.html$/i,
            use:['html-loader']
          },
          {
            test:/\.tsx?$/,
            use:'ts-loader',
            exclude:/node_modules/
          }
        ],
    },
    resolve:{

      extensions:['.tsx','.ts','.js' ]
    }
    };

