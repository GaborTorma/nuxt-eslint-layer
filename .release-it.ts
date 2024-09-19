import { defineReleaseItConfig } from '@gabortorma/mwm'
import { name } from './package.json'

export default defineReleaseItConfig('nuxt-layer', name.split('/').pop())
