import test from 'ava'
import { ESLint } from 'eslint'
import config from '../index'

const eslint = new ESLint({ baseConfig: config })

test('load config in eslint to validate all rule syntax is correct', async function (t) {
  const code = 'const foo = 1\nconst bar = function () {}\nbar(foo)\n'
  const [lintResult] = await eslint.lintText(code)
  t.is(lintResult.errorCount, 0)
})

test('ensure we allow top level await', async function (t) {
  const code = 'const foo = await 1\nconst bar = function () {}\nawait bar(foo)\n'
  const [lintResult] = await eslint.lintText(code)
  t.is(lintResult.errorCount, 0)
})
