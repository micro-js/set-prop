/**
 * Modules
 */

var clone = require('@micro-js/clone-shallow')

/**
 * Expose setProp
 */

module.exports = setProp['default'] = setProp

/**
 * setProp
 */

function setProp (path, obj, value, idx) {
  idx = idx || 0

  if (typeof path === 'string') {
    path = path.split('.')
  }

  if (path.length === idx) {
    return value
  }

  var key = path[idx]
  return set(obj, key, setProp(path, obj[key], value, ++idx))
}

function set (obj, key, value) {
  var newObj = clone(obj)
  newObj[key] = value
  return newObj
}
