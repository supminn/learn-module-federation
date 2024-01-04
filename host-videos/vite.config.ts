import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name:"video_app",
    remotes:{
      headerApp: "http://localhost:50001/assets/remoteEntry.js",
    },
    shared:["react","react-dom"]
  })],
})
