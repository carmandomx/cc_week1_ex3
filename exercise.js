/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    var r = [];  //create an empty array to store the result
    for(let i=0; i<arr.length; i++) { //for loop to iterate through the array
        if (arr[i]) { //falsy elements are not true, so we push all the true elements to the new array
            r.push(arr[i]);
        }
    }
    return r; //return the new array
    
    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;