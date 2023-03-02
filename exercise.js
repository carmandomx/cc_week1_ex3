/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    let allowed = arr.filter(Boolean); //This method filters all the elements that gives you a false (boolean)
    return allowed
    
    /* Only make changes below this comment */
}
var arr = [0, 1, 2, "Sergio", null, false, true, NaN, "Dog"]//This array contains falsy elements like:
//0, null, false, NaN.

console.log(youShallNotPass(arr))//The answer will be [ 1, 2, 'Sergio', true, 'Dog' ]//



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;