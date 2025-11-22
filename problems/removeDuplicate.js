
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


//filter and indexof

function removeDup(array){
    return array.filter((val,index,self) => self.indexOf(val) == index );
}

console.log(removeDup([1,2,3,4,5,5,6,6,7,7,8]));


// using reduse 

function removeDulic(ary){
   return ary.reduce((unique, item) => {
       return unique.includes(item) ? unique: [...unique, item ];
    },[])                           // ^true        ^false
}

console.log(removeDulic([1,2,3,3,5,6,6,8,9]));