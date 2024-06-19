import { defineConfig } from 'vite'
import { sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          // Add your navbar configs here
        ],
        sidebar: {
          // Add your sidebar configs here
        },
        github: 'https://github.com/ijjeon1203',
        logo: '/sveltepress.svg',
      }),
      siteConfig: {
        title: 'Jeon in june',
        description: '1993-12-03',
      },
    }),
  ],
})

export default config
