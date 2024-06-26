import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import node from "@astrojs/node";
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file'
  },
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    }
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [mdx(),preact()],
  srcDir: './src/html',
  cacheDir: './dist/pages',
  outDir: './dist/pages'
})
