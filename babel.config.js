module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@ui': './src/ui',
          '@themes': './src/themes',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
