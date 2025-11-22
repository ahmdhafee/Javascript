function countVowelInString(str){
    const count = {};
    const vowel = "aeiou";

    for(let char of str.toLowerCase()){
        
        for(let vel of vowel ){
            if(vel=== char){
                if(count[char]){
                    count[char]++;
                }else{
                    count[char]=1;
                }
            }
        }
    }
    return count;
}

const inputString = "Hello world";

const inputCount = countVowelInString(inputString);

console.log(inputCount);