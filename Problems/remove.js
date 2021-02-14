/* Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny' */

const removeChar = function (string, chars) {
    let newString = '';
    let keep = true;

    for (let i = 0; i < string.length; i++) {
        keep = true;
        for (let j = 0; j < chars.length; j++) {
            if(string[i] === chars[j].toLowerCase()) {
                keep = false;
            }
        }
        if (keep) {
            newString += string[i];
        }
    }
    return newString;
}

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')) //Bttl f th Vwls: Hw vs. Grzny

// este funciona es o(nˆ2)