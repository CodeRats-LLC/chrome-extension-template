// uno.config.ts
import { defineConfig } from 'unocss'

import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import presetTypography from '@unocss/preset-typography'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetIcons from '@unocss/preset-icons'

import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerCompileClass from '@unocss/transformer-compile-class'

export default defineConfig({
 theme: {
    fontFamily: {
      Roboto: 'Roboto',
      RobotoMono: '\'Roboto Mono\'',
      RobotoMonoItalic: '\'Roboto Mono Italic\'',
    },
    colors: {
      'neutral': {
        '50': 'oklch(98.51% 0.00 0.00)',
        '100': 'oklch(97.02% 0.00 0.00)',
        '200': 'oklch(92.19% 0.00 0.00)',
        '300': 'oklch(86.99% 0.00 0.00)',
        '400': 'oklch(71.55% 0.00 0.00)',
        '500': 'oklch(55.55% 0.00 0.00)',
        '600': 'oklch(43.86% 0.00 0.00)',
        '700': 'oklch(37.15% 0.00 0.00)',
        '800': 'oklch(26.86% 0.00 0.00)',
        '900': 'oklch(20.46% 0.00 0.00)',
        '950': 'oklch(14.48% 0.00 0.00)',
      },
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'Roboto, sans-serif',
        mono: 'Roboto Mono, monospace',
      }
    }),
    presetIcons({
      collections: {
        custom: {
        },
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      },
      customizations: {
        iconCustomizer(collection, icon, props) {
          if (collection === 'mdi') {
            props.width = '24px'
            props.height = '24px'
          }
        },
      },
      extraProperties: {
        cursor: 'pointer',
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      prefix: 'i-',
    }),
  ],
  rules: [
/*
    [/^bg-(.*)$/, ([, c], { theme }) => {
      if (theme.colors[c])
        return { color: theme.colors[c] }
    }],
    [/^text-(.*)$/, ([, c], { theme }) => {
      if (theme.colors[c])
        return { color: theme.colors[c] }
    }],
*/
		[/^(fill|stroke)-(.*)$/, ([, n, c], { theme }) => {
      const parts = c.split('-');
      const color = parts[0];
      const shade = parts[1] || 'DEFAULT';
      const str = `${theme.colors?.[color]?.[shade] || theme.colors?.[color] || c}`
      console.log(`${n}: ${str}`);
      const result = {};
      result[n] = str;
			return result;
		}],
    [/^(stroke-width|sw)-(.*)$/, ([, w]) => {
      return {
        'stroke-width': `${w}px`,
      }
    }],
  ],
  shortcuts: [
    ['icon', 'w-5.5 h-5.5 cursor-pointer select-none transition-opacity-300 ease-in-out'],
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
  variants: [
  ],
})
