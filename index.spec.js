const { expect } = require('chai');
const { describe, it } = require('mocha');

const { validate } = require('./index');

describe('validate module', () => {
  describe('Instantiation', () => {
    it('should export a function', () => {
      expect(validate).to.be.a('function');
    });
  });
});
