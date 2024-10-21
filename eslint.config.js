module.exports = {
    root: true,
    env: {
        node: true,
        browser: true, // Allows rules for frontend code
        es6: true,
    },
    // Define specific parser for frontend (React) and backend (Node.js)
    overrides: [
        {
            files: ['frontend/**/*.js', 'frontend/**/*.jsx'],
            env: {
                browser: true,
            },
            extends: [
                'eslint:recommended',
                'plugin:react/recommended',
            ],
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
        {
            files: ['backend/**/*.js'],
            env: {
                node: true,
            },
            extends: [
                'eslint:recommended',
            ],
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
    ],
    rules: {
        // Common rules for both frontend and backend
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
