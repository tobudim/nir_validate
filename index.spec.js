const { expect } = require('chai');
const { describe, it } = require('mocha');

const { validate } = require('./index');

describe('validate module', () => {
  describe('Instantiation', () => {
    it('should export a function', () => {
      expect(validate).to.be.a('function');
    });
  });
  describe('Test functionnalities', () => {
    it('should validate "255081416802538" as a string', () => {
      expect(validate('255081416802538')).to.be.equal(true);
    });
    it('should refuse "25508141680253834"', () => {
      expect(validate('25508141680253834')).to.be.equal(false);
    });
    it('should throw an error with 255081416802538 as a number', () => {
      expect(() => { validate(255081416802538); }).to.throw('Input should be a string');
    });
    it('should refuse "A25508141680253834"', () => {
      expect(validate('A25508141680253834')).to.be.equal(false);
    });
    it('should refuse "B25508141680253834"', () => {
      expect(validate('B25508141680253834')).to.be.equal(false);
    });
    it('should validate "2 55 08 14 168 025 38" with { shouldClean: true }', () => {
      expect(validate('2 55 08 14 168 025 38', { shouldClean: true })).to.be.equal(true);
    });
    it('should refuse "2 55 08 14 168 025 38" with { shouldClean: false }', () => {
      expect(validate('2 55 08 14 168 025 38', { shouldClean: false })).to.be.equal(false);
    });
    it('should refuse empty string ""', () => {
      expect(validate('')).to.be.equal(false);
    });
    it('should refuse "zefuobzef"', () => {
      expect(validate('zefuobzef')).to.be.equal(false);
    });
  });
});
