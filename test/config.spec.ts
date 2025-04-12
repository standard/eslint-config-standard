import { ESLint } from 'eslint'

import config from '@eslinter/eslint-config-standard'

const eslint = new ESLint({
  overrideConfigFile: true,
  baseConfig: config,
})

test('load config in eslint to validate all rule syntax is correct', async () => {
  const code = 'const foo = 1\nconst bar = function () {}\nbar(foo)\n'
  const [lintResult] = await eslint.lintText(code)
  expect(lintResult.errorCount).toBe(0)
})

test('ensure we allow top level await', async () => {
  const code =
    'const foo = await 1\nconst bar = function () {}\nawait bar(foo)\n'
  const [lintResult] = await eslint.lintText(code)
  expect(lintResult.errorCount).toBe(0)
})
