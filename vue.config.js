const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: [
        'vuetify'
    ],
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/temlate/index.html',
            filename: 'index.html',
        },
    },
})
