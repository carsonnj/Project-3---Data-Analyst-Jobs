import { resolve } from "path";

export default {
  build: {
    sourcemap: true,
  },
  rollupOptions: {
    input: {
        main: resolve(__dirname, 'dist/index.html'),
    }
  }
}
