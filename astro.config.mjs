import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkToc from "remark-toc";
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    site: "https://its-just-nans.github.io",
    integrations: [
        svelte(),
        mdx({
            remarkPlugins: [remarkMath, remarkToc],
            rehypePlugins: [rehypeKatex],
            shikiConfig: {
                theme: "github-dark",
                // // Enable word wrap to prevent horizontal scrolling
                // wrap: true,
            },
        }),
        sitemap({
            changefreq: "weekly",
            lastmod: new Date(),
        }),
    ],
    vite: {
        build: {
            assetsInlineLimit: 0,
        },
    },
});
