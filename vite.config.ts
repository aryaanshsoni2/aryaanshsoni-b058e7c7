
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // This allows Resend to work in the browser environment
    'process.env': {
      RESEND_API_KEY: JSON.stringify('re_fR4Tw8N6_EQmfWKX28KFZep6iJyZV1GpQ')
    },
    // Also define global.process for Resend compatibility
    'global.process.env.RESEND_API_KEY': JSON.stringify('re_fR4Tw8N6_EQmfWKX28KFZep6iJyZV1GpQ'),
    'global': {}
  }
}));
