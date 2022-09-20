/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */

    //In this array I will put the result
    let result = [];

    //The falsy values are [false, 0, -0, 0n, empty string, null, undefined, NaN, [[IsHTMLDDA]] from document.all]
    //Instead of identifying everyone one by one, it's easier to filter them with a boolean context
    //Because they will all result "false"

    //the "for of" structure allows me to check each of the elements in the array
    //where "element" is the real value of the array index of each iteration
    for (element of arr){

        //if the value is NOT falsy...
        if(element){
            //...I push it into my result array
            result.push(element);
        }
    }
    //with this, the falsy values should be left out of my result array
    return result;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;