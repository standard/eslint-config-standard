const eslint = require('eslint')
const test = require('tape')

test('load config in eslint to validate all rule syntax is correct', function (t) {
  const CLIEngine = eslint.CLIEngine

  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json'
  })

  const code = 'var foo = 1\nvar bar = function () {}\nbar(foo)\n'

  t.equal(cli.executeOnText(code).errorCount, 0)
  t.end()
})
