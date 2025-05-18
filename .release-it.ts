import { defineReleaseItConfig } from '@gabortorma/mwm'
import { name } from './package.json'

export default defineReleaseItConfig('nuxt-layer', name.split('/').pop(), {
  plugins: {
    'release-it-pnpm': {
      publishCommand: 'pnpm publish --access public --no-git-checks --tag $tag',
    },
  },
})
