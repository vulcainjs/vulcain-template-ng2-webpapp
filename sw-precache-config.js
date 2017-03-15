module.exports = {
  navigateFallback: '/index.html',
  maximumFileSizeToCacheInBytes: 8388608,
  stripPrefix: 'dist',
  root: 'dist/',
  cacheId: 'cortex-v0.99',
  staticFileGlobs: [
    'dist/index.html',
    'dist/**/*.js',
    'dist/**/*.css',
    'dist/assets/fonts/*',
    'dist/manifest.json',
    'dist/favicon.ico'
  ],
  runtimeCaching: [
    {
      urlPattern: /\/api\/tests\//,
      handler: 'networkFirst',
      options: {
        cache: {
          maxEntries: 25,
          name: '<%= project.safeName %>-api-cache'
        }
      }
    }
  ]
};
