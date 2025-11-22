function longestWord(sentences){
    const words = sentences.split(' ');
    let longestWord = '';

    for(let word of words){
        if(word.length > longestWord.length) longestWord = word;
    }
    return longestWord;
}


console.log(longestWord("hi guyssss i am hafeel"));