/**
 * Modules
 */

var clone = require('@f/clone-shallow')
var isFunction = require('@f/is-function')
var isString = require('@f/is-string')
var isNumber = require('@f/is-number')

/**
 * Expose setProp
 */

module.exports = setProp['default'] = setProp

/**
 * setProp
 */

function setProp (path, obj, value) {
  // Fast-path single key array paths
  if (isNumber(path)) return set(obj, path, value)
  if (isString(path)) path = path.split('.')

  return setPropInternal(path, obj, value, 0)
}

function setPropInternal (path, obj, value, idx) {
  if (path.length === idx) {
    return value
  }

  // Create things as we go down if they don't exist
  obj = obj || {}

  var key = path[idx]
  return set(obj, key, setPropInternal(path, obj[key], value, ++idx))
}

function set (obj, key, value) {
  var newObj = clone(obj)
  newObj[key] = isFunction(value) ? value(obj[key]) : value
  return newObj
}
