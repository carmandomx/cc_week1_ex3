/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */

    /* A new array where the positive values will be stored */
    let newArr = []

    /* Iteration through all the original array in order to find falsey values, such values will not be added
    into the new array. */
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i])
        }
        
    }
    
    /* Once all the values are stored, return them. */
    return newArr;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;