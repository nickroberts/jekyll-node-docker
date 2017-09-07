module.exports = ctx => {
  return {
    plugins: {
      autoprefixer: {
        browsers: ['last 2 versions', 'Safari <= 6']
      },
      cssnano: {
        discardComments: {
          removeAll: true
        }
      }
    }
  };
};
