/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    let newArr = arr.filter(Boolean); //we create a new array that will store only truthy values using the boolean constructor (boolean cosntructor will only return truthy values)
    return newArr; //return new array filtered with only truthy values 
    /* Only make changes below this comment */
}
console.log(youShallNotPass([NaN, 76, "gfg", true, 12, "hi", [], false])); //function with example array to test correct use of function




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;