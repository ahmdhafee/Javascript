function removeDuplicate(str){
    let word = '';

    for(let char of str.toLowerCase()){
        if(!word.includes(char)){
            word += char;
        }
    }
    return word;
}

const inputWord = "Hello World";

const finalWord = removeDuplicate(inputWord);

console.log(finalWord);