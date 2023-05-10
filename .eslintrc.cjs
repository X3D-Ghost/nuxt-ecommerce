// .eslintrc.cjs

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    // parser: 'vue-eslint-parser',
    parserOptions: {
        // parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
    },
    extends: ['plugin:prettier/recommended', 'plugin:nuxt/recommended'],
    plugins: [],
    rules: {},
}
