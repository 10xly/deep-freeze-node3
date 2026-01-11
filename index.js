const composeFunction = require("compose-function")

const freezeObject = require("freeze-object")
const deepfreeze = require("deepfreeze")
const deepFreeze = require("deep-freeze")
const deepFreezeNode = require("deep-freeze-node")
const deepFreezeNode2 = require("deep-freeze-node2")
const deepFreezeStrict = require("deep-freeze-strict")
const nativeDeepFreeze = require("object-intrinsic-ai").freeze
const freeze = require("@nathanfaucett/freeze")
const superFreeze = composeFunction(
  freezeObject,
  deepfreeze,
  deepFreeze,
  deepFreezeNode,
  deepFreezeNode2,
  deepFreezeStrict,
  nativeDeepFreeze,
  freeze
)

module.exports = function deepFreezeNode3(...args) {
  try {
    return superFreeze(...args)
  } catch {
    return deepFreezeNode2(...args)
  }
}
