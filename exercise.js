/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */

    // ==================== Using the suggested "for loop" =========================
    let truthyArr = []; // initially empty, will be filled with truthy values
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]; // loop through each value of the given array 
        
        if (value) {
            // It'll enter the "if" only when the value is truthy
            // in that case: add the value to the truthy array
            truthyArr.push(value);
        } else {
            // otherwise it will skip pushing that value into our truthy array
            continue;
        }
    }
    return truthyArr; // return the new array after looping

    // // ==================== A much simpler version using "filter" =========================
    // // Declare an array that will store truthy values by filtering (gets rid of falsy values)
    // const truthyArr = arr.filter(function(value) { 
    //     return value; // only returns truthy values, equivalent to using boolean
    // });

    // return truthyArr;

    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;