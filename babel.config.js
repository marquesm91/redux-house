module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['ie >= 11'],
          },
          exclude: ['transform-async-to-generator', 'transform-regenerator'],
          modules: process.env.BABEL_ENV === 'commonjs' ? 'cjs' : false,
          loose: true,
        },
      ],
    ],
    plugins: [
      // don't use `loose` mode here - need to copy symbols when spreading
      '@babel/proposal-object-rest-spread',
      process.env.NODE_ENV === 'test' && '@babel/transform-modules-commonjs',
    ].filter(Boolean),
  };
};
