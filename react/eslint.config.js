import baseConfig from '../eslint.config.mjs'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import prettierConfig from 'eslint-config-prettier'

export default [
    ...baseConfig,
    reactPlugin.configs.flat.recommended,
    prettierConfig, // Disable ESLint rules that conflict with Prettier
    {
        languageOptions: {
            globals: {
                ...globals.worker,
                ...globals.browser,
            },
        },
    },
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
]
