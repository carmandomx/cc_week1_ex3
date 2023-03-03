/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    let arr2 = []//we create an empty array
    for (i=0; i<=arr.length-1; i++){    // we use a for loop to iterate the input array
        if (arr[i]){//we validate if the values a truty
            arr2.push(arr[i]);//if the condition is right we add the elements to the empty array
        }
    }
    return arr2;//we return the empty array as a final result
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;