import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig(() => {
  const rootPath = path.resolve(process.cwd());
  const srcPath = `${rootPath}/src`;

  return {
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath
      }
    },
    plugins: [vue()],
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true
    },
    preview: {
      port: 5050
    },
    build: {
      brotliSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false
      }
    }
  };
});
