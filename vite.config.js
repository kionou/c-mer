import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { createHtmlPlugin } from 'vite-plugin-html';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // createHtmlPlugin({
    //   inject: {
    //     data: {
    //       injectScript: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>`,
          
    //     },
    //   },
    // }),
  ],
});




