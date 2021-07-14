export default {
  mount: {
    public: '/',
    src: '/',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-sass',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    baseUrl: './',
    out: "dist",
  },
  buildOptions: {
    baseUrl: './',
    out: "dist",
  },
};
