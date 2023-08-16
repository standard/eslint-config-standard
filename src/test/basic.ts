import config from '..'
import test from 'tape'

test('test basic properties of config', function (t) {
  t.ok(isObject(config.parserOptions))
  t.ok(isObject(config.env))
  t.ok(isObject(config.globals))
  t.ok(isObject(config.rules))
  t.end()
})

function isObject (obj: unknown): boolean {
  return typeof obj === 'object' && obj !== null
}
