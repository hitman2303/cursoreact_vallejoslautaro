import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // <- clave para que las rutas JS comiencen con "./assets/..."
});
