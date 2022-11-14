module.exports = {
    env: {
        test: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: { node: true },
                    },
                ],
            ],
            plugins: [
                [
                    '@vue/babel-plugin-jsx',
                    { mergeProps: false, enableObjectSlots: false },
                ],
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-runtime',
            ],
        },
    },
};