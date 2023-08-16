import config from '..'
import test from 'ava'

test('test basic properties of config', function (t) {
  t.true(isObject(config.parserOptions))
  t.true(isObject(config.env))
  t.true(isObject(config.globals))
  t.true(isObject(config.rules))
})

function isObject (obj: unknown): boolean {
  return typeof obj === 'object' && obj !== null
}
