module.exports = {
  overrides: [
    {
      files: ['*.js', '*.ts'],
      extends: 'love',
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ]
}
