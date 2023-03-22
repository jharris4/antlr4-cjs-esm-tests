module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // useBuiltIns: false,
        modules: "commonjs",
        targets: {
          browsers: [
            // 'last 2 versions',
            // 'not ie > 0',
            "chrome > 60"
          ]
        }
        // "targets": "> 0.25%, not dead"
        // "targets": "last 2 versions, > 5%"
      }
    ]
  ]
};
