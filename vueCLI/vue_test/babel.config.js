module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 追加相关Element-UI的相关东西
    ["es2015", { "modules": false }],

  ],
  // 追加相关Element-UI的相关东西
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
