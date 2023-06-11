// uno.config.ts
import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno({prefix: 'un-'}),
    presetIcons()
  ],
  shortcuts: {
    'un-hover-scale' : 'hover:un-scale-100.5 hover:un-translate-y--.5 un-transition-transform un-cursor-default',
  }
})
