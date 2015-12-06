/**
 * Modules
 */

var clone = require('@micro-js/clone-shallow')
var isFunction = require('@micro-js/is-function')
var isString = require('@micro-js/is-string')
var isNumber = require('@micro-js/is-number')

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
