export default {
  mount: {
    public: '/',
    src: '/dist',
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
    baseUrl: '/mostafiz/',
    out: "dist",
  },
  buildOptions: {
    baseUrl: '/mostafiz/',
    out: "dist",
  },
};
