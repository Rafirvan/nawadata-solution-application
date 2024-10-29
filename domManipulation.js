function loadSample1(text) {
    document.getElementById("inputField1").value = text;
}

function loadSample2(numberOfFamilies, numberOfMembers) {
    document.getElementById("inputField2").value = numberOfFamilies;
    document.getElementById("inputField3").value = numberOfMembers;

}

document.getElementById("processButton1").addEventListener("click", () => {
    const inputText = document.getElementById("inputField1").value;
    const result = sortCharacter(inputText); 
    document.getElementById("outputArea1").value = 
        `Vowel Characters:\n${result.sortedVowels}\nConsonant Characters:\n${result.sortedConsonants}`;
});

document.getElementById("processButton2").addEventListener("click", () => {
    const numberOfFamilies = document.getElementById("inputField2").value;
    const numberOfMembers = document.getElementById("inputField3").value;

    const functionResult = psbb(numberOfFamilies, numberOfMembers);

    let result;
    if (functionResult === -1) result = "Input must be equal with count of family"
    else result = `Minimum bus required is : ${functionResult}`

    document.getElementById("outputArea2").value = result;
});