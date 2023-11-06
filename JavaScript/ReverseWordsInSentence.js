function reverseWordsInSentence(sentence) {
    function reverseWord(word) {
        let reversed = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversed += word[i];
        }
        return reversed;
    }

    let words = [];
    let word = '';
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            words.push(reverseWord(word));
            word = '';
        } else {
            word += sentence[i];
        }
    }

    words.push(reverseWord(word));

    let reversedSentence = words.join(' ');
    return reversedSentence;
}

const inputSentence = prompt("Enter a sentence: ");
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log("Reversed sentence:", reversedSentence);
