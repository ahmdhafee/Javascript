//Reverse a string without using built-in methods

const originalString = "Hello";

const reversedString = reversing(originalString);

console.log (reversedString);
function reversing(str){
         let reversed = '';

         for (let i = str.length - 1;  i >= 0 ; i--){
                 reversed += str[i];
         }
         return reversed;
}

//Reverse a string with built in methods in function

function buildInReversing(str){
        let builtReversed = str.split('').reverse().join('');
        return builtReversed;
}

const forBuiltWithStr = "whatsapp";

const buildWithReversed = buildInReversing(forBuiltWithStr);

console.log(buildWithReversed);

//Reverse a string with built in methods without function

const pureString = "Anfal";

const pureStrReversed = pureString.split('').reverse().join('');

console.log(pureStrReversed);

//reverse integer 

const number = 23456546;
const number2 = -2423435;

function reverseInteger(num){
        return parseInt(num.toString().split('').reverse().join(''))*Math.sign(num);
}

console.log(reverseInteger(number));
console.log(reverseInteger(number2));