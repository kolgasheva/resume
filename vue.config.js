const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/scss/abstracts/mixins.scss"`
      },
      scss: {
        additionalData: `@import "~@/scss/abstracts/mixins.scss";`
      },
    }
  }
})
