

module.exports = {
  presets: [ 
    "@babel/preset-env",
     "@babel/preset-react",
     '@babel/preset-typescript'
  ],
  plugins: [ 
    "@babel/plugin-transform-arrow-functions",
     "@babel/plugin-proposal-class-properties",
      {
         loose: true
      }
         
  ]
}