// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
    alias: {
      assets: "/<rootDir>/assets",
    },
    css: ["@/assets/css/style.css", "@/assets/js/slick/slick.css", "@/assets/js/slick/slick-theme.css"],    
    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'Aanbieding24',
          meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'My amazing site.' },
          
          ],
          script: [
            {
              src: "js/main.js",
            },
            // {
            //   src: "http://code.jquery.com/jquery-1.11.0.min.js",
            // },
            // {
            //   src: "http://code.jquery.com/jquery-migrate-1.2.1.min.js",
            // },
            // {
            //   src: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js",
            // },
          ],
        }
      },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
