/**
 * @param {string} s
 * @return {number}
 */

const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

var romanToInt = function(s) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {

        if (roman[s[i + 1]] > roman[s[i]]) {
            result += roman[s[i + 1]] - roman[s[i]];
            i++;
        } else {
            result += roman[s[i]];
        }
    }

    return result;
};



module.exports={romanToInt}