module.exports = {
  extends: 'standard',
  plugins: [
    'standard',
    'promise',
  ],
  rules: {
    semi: [ 'warn' ],
    'valid-jsdoc': [ 'error' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    camelcase: [ 'off', {
      properties: 'never',
    } ],
    'comma-dangle': [ 'error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
    } ],
    'no-multi-spaces': [ 'error', { exceptions: {
      VariableDeclarator: true,
      ImportDeclaration: true,
      Property: true,
    } } ],
    'require-jsdoc': [ 'error', { require: {
      FunctionDeclaration: true,
      MethodDefinition: true,
      ClassDeclaration: true,
    } } ],
  },
}
