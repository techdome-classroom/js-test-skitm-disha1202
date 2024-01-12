/**
 * @param {string} s
 * @return {boolean}
 */

//(){}
var isValid = function(s) {
    const stack = [];
    const bracket = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (char in bracket) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (char !== bracket[top]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};


module.exports = { isValid };


