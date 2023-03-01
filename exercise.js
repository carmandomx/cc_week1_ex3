/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */

    /* 
    The falsy values are considered false in the Boolean context (false, 0, -0, 0n, '', ``, null, undefind and NaN) 
    So we need to filter the values of the array using the array method "filter"
    */
    const trueArr = arr.filter(Boolean);

    /* Return the new filtered array */
    return trueArr;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;