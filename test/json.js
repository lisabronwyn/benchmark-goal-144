const expect = require('chai').expect

import json from '../src/json.js'

describe('json', () => {
  it('is a function', () => {
    expect(json("It is a good day")).to.equal("itIsAGoodDay")
  })

}
