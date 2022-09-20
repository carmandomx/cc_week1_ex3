/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    
    /* Only make changes below this comment */

    /* filter () creates a new array with all the elements */
    /*that meet the condition implemented by the given function.*/

    const NewArray = arr.filter(Boolean);
    return NewArray;
        
    /* Only make changes below this comment */
}
/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;