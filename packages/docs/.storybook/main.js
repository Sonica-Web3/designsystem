const { mergeConfig } = require('vite');

module.exports = {
  "stories": ['../src/pages/**/*.stories.mdx', '../src/stories/**/*.stories.tsx'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true,
  },
  async viteFinal(config, { configType }) {

    config.devtool = 'source-map'
    
    if (configType === 'PRODUCTION') {
      config.base = '/'
    }

    return config
    
  }
}