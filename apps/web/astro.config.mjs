import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import mdx from '@astrojs/mdx';
import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
	image: {
    domains: ['astro.build'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.bytebase.com',
      },
    ]
  },
  integrations: [tailwind(), react(), markdoc(), mdx(), keystatic()],
  output: "hybrid",
  adapter: cloudflare(),
});
