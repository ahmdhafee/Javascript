

function anagramsCheck(strOne, StrTwo){
    const sOCount = {};
    const sTCount = {};
    if(strOne.length === StrTwo.length){

   for(let char of strOne.toLowerCase()){
       if(sOCount[char]){
        sOCount[char]++;
       }else{
        sOCount[char]=1;
       }
   }

   for(let chr of StrTwo.toLowerCase()){
     if(sTCount[chr]){
     sTCount[chr]++;
     }else{
     sTCount[chr]=1;
     }
   }
    
   for(let char of strOne){
    if(sOCount[char] !== sTCount[char]){
        return false;
    }
   }

   return true;


    }
    else{
        return false;
    }
}

const checkedWord = anagramsCheck('aab','abb');

console.log(checkedWord);


//test