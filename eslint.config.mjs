import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

const eslintConfig = [
  ...coreWebVitals,
  ...typescript,
  {
    ignores: ['.next/**', 'node_modules/**', 'next-blog/**'],
  },
  {
    rules: {
      // Patrón preexistente en ThemeToggle/BlogClient; pendiente de refactor
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
]

export default eslintConfig
