/**
 * Imports
 */

var setProp = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var obj = {a: {b: 1}}
  var newObj = setProp('a.b', obj, 2)

  t.equal(obj.a.b, 1)
  t.equal(newObj.a.b, 2)
  t.notEqual(obj, newObj)

  obj = {a: 1}
  newObj = setProp('a', obj, 2)

  t.equal(obj.a, 1)
  t.equal(newObj.a, 2)
  t.notEqual(obj, newObj)

  t.end()
})

test('should work with a function', function (t) {
  var obj = {a: {b: 1}}
  var newObj = setProp('a.b', obj, add1)

  t.equal(obj.a.b, 1)
  t.equal(newObj.a.b, 2)
  t.notEqual(obj, newObj)
  t.end()

  function add1 (a) {
    return a + 1
  }
})

test('should create new objects for subpaths that dont exist yet', function (t) {
  var obj = {}
  var newObj = setProp('a.b.c', obj, 1)

  t.equal(newObj.a.b.c, 1)
  t.end()
})
