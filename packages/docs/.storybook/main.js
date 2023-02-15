const { mergeConfig } = require('vite');

module.exports = {
  "stories": ['../src/pages/**/*.stories.mdx', '../src/stories/**/*.stories.tsx'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true,
  },
  async viteFinal(config, { configType }) {
    
    config.base  = (configType === 'PRODUCTION') ? "/designsystem/" : config.base;

    return config;
    
  }
}