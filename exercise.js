/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    let len_arr=arr.length /* Lenght of the array to loop through the whole array */
    let non_falsey=[] /* auxiliar value to save only truthy values*/ 
    for (let i=0;i<len_arr;i++){
        if (arr[i]){ /*IF the element is truthy...*/ 
            non_falsey.push(arr[i]) /* we put the truthy element into the array*/
        }
    }
    return non_falsey
    /* Only make changes below this comment */
}




/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;