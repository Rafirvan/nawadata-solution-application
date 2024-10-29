


function sortCharacter(text) {

    const vowels = ["a", "i", "u", "e", "o"];

    lowerCaseText = text.toLowerCase();

    let textVowels = [];
    let textConsonants = [];

    lowerCaseText.split("").forEach((char) => {
        if (char != " ") {
            vowels.includes(char) ? textVowels.push(char) : textConsonants.push(char);
        }
    })
    

    const sortedVowels = groupLetters(textVowels);
    const sortedConsonants = groupLetters(textConsonants);

    console.log(`Vowel Characters:\n${sortedVowels}\nConsonant Characters:\n${sortedConsonants}`);

    

    return { sortedVowels, sortedConsonants };
}

function groupLetters(textArr) {
    const result = [];
    const seen = new Set();

    textArr.forEach(char => {
        if (seen.has(char)) {
            const firstIndex = result.indexOf(char);
            result.splice(firstIndex + 1, 0, char);
        } else {
            seen.add(char);
            result.push(char);
        }
    });

    return result.join("");
}



