/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    
    
    /* Only make changes below this comment */

    //Javascript has a method called 'filter()' which method creates a new array filled with elements that pass a test provided by a function
    //In this case I put boolean to filter the falsy values from the given array and return the array with the remaining values.

    return arr.filter(Boolean);


}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;