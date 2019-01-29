module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
const path = require("path");

// const path = require("path");

// module.exports = (baseConfig, env, config) => {
//   config.module.rules.push({
//     test: /\.tsx?$/,
//     include: path.resolve(__dirname, "../src"),
//     use: [
//       require.resolve("ts-loader"),
//       require.resolve("react-docgen-typescript-loader"),
//     ],
//   });

//   config.resolve.extensions.push(".ts", ".tsx");

//   return config;
// };