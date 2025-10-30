function stringCharacters(str){
    const counts = {};

    for (let char of str){
        if(counts[char]){
            counts[char]++;
        }else{
            counts[char]=1;
        }
    }
    return counts;
}
const inputString="Hello World";

const stringCount = stringCharacters(inputString);

console.log(stringCount);

function integerCount(num){
    const counts = { };

    for(let int of num){
        if(counts[int]){
            counts[int]++;
        }else{
            counts[int] = 1;
        }
    }
    return counts;
}

const inputInteger = "1242313214243";

const numCount = integerCount(inputInteger);

console.log(numCount);