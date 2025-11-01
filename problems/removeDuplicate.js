
// remove duplicate letters from string

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

//remove duplicate value from Arrys

function removeDuplicateNum(arr){
    arr.sort();
    return [...new Set(arr)];
}


const array = [1,2,2,5,9,4,5,9,6,6];
console.log(removeDuplicateNum(array));

