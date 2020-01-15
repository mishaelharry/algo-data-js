// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let characters = {};

    for (let character of str) {
        characters[character] = characters[character] + 1 || 1;
    }

    let maxCount = 0;
    let maxChar = "";
    for (let character in characters) {
        if (characters[character] > maxCount) {
            maxCount = characters[character];
            maxChar = character;
        }
    }
    return maxChar;
}

module.exports = maxChar;
