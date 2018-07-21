const checker = {};

checker.isPalindrome = function( str ) {
    str = str.toLowerCase().replace(/[\W_]+/g, '');
    let strCopy = str.split('').reverse().join('');

    return str == strCopy;
}

module.exports = checker;