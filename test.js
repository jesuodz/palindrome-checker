const assert = require('assert');
const checker = require('./index.js');

describe('Check is word is palindrome', () => {
    describe('isPalindrome', () => {
        it('should return a boolean', () => {
            assert.equal(typeof(true), typeof(checker.isPalindrome('eye')));
        });
        it('should return true', () => {
            assert.equal(true, checker.isPalindrome('eye'));
        });
        it('should return true', () => {
            assert.equal(true, checker.isPalindrome('_eye'));
        });
        it('should return true', () => {
            assert.equal(true, checker.isPalindrome('race car'));
        });
        it('should return false', () => {
            assert.equal(false, checker.isPalindrome('not a palindrome'));
        });
        it('should return true', () => {
            assert.equal(true, checker.isPalindrome('never odd or even'));
        });
        it('should return false', () => {
            assert.equal(false, checker.isPalindrome('nope'));
        });
        it('should return true', () => {
            assert.equal(true, checker.isPalindrome('My age is 0, 0 si ega ym.'));
        });
        it('should return false', () => {
            assert.equal(false, checker.isPalindrome('almostomla'));
        });
        it('should return false', () => {
            assert.equal(false, checker.isPalindrome('1 eye for 1 eye'));
        });
        it('should return true', () => {
            assert.equal(true, checker.isPalindrome('0_0 (: /-\ :); // 0-0'));
        });
        it('should return false', () => {
            assert.equal(false, checker.isPalindrome('five|\_/|four'));
        });
    })
});