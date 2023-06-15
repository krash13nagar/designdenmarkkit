// module.exports = {
//   stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-interactions',
//   ],
//   framework: '@storybook/react',
//   core: {
//     builder: '@storybook/builder-webpack5',
//   },
//   webpackFinal: async (config, { configType }) => {
//     // Modify the existing config as needed

//     // Return the updated config
//     return config;
//   },
// };
// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
// .storybook/main.ts

// const { Configuration } = require('webpack');
const path = require('path');

module.exports = {
  // stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  // webpackFinal: async (config: any) => {
  //   config?.module?.rules?.push({
  //     test: /\.(ts|tsx)$/,
  //     use: [
  //       {
  //         // loader: 'ts-loader',
  //         loader: require.resolve('ts-loader'),
  //         options: {
  //           transpileOnly: true,
  //         },
  //       },
  //     ],
  //     include: path.resolve(__dirname, '../src'),
  //   }) ?? [];
  //   config?.resolve?.extensions?.push('.ts', '.tsx') ?? [];
  // Add additional webpack configuration if necessary

  //   return config;
  // },
  typescript: {
    check: false,
    // reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   allowSyntheticDefaultImports: true,
    //   propFilter: (prop: any) =>
    //     prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    // },
  },
};
