//check if a string is a palindrome

/* Example of palindrome 
1.radar
2.level 
3.madam 
reverse reading also same meaning
*/

function isPalindrome(str){
    function reversing(s){
        let reversed = '';

        for (let  i = s.length-1; i >=0 ; i--){
            reversed += s[i];
        }
        return reversed;
    }
    const cleanString = str.toLowerCase();
    return cleanString === reversing(cleanString);
}

console.log(isPalindrome('level'));