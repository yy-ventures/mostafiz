export default {
  mount: {
    public: { url: '/', static: true, resolve: false },
    src: '/',
  },
  plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-sass'],
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  optimize: {
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    open: 'none',
    out: 'dist',
    port: 1111,
  },
  buildOptions: {
    out: 'dist',
  },
};
