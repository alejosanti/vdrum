module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        parser: "@babel/eslint-parser",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "linebreak-style": ["error", "windows"], // changes the file to CRLF
        "vue/multi-word-component-names": 0,
        "vue/valid-v-slot": "off",
        "vue/no-unused-vars": "warn",
        "vue/no-unused-components": "warn",
    },
};
