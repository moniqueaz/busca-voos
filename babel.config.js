module.exports = {
  plugins: [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
  ],
  presets: ['next/babel', '@babel/preset-env', '@babel/preset-react'],
};
