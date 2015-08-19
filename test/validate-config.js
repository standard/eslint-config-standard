var test = require('tape')

test('load config in eslint to validate all rule syntax is correct', function (t) {
  var CLIEngine = require('eslint').CLIEngine

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json'
  })

  var code = 'var foo = 1\nvar bar = function () {}\nbar(foo)\n'

  t.ok(cli.executeOnText(code).errorCount === 0)
  t.end()
})
