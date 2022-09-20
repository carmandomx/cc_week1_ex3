/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    
    let result=[]; //Here will be store the result for the test


        for (let i = 0; i < arr.length; i++) { //This is going to pass through the whole array
            if (arr[i]) { //here we are going to evaluate the array one by one and if it has a value is going to follow instructions
                result.push(arr[i]); //if the condition is true, the function push is going to take the value inside of the result array.
            }
    }

 
    return result;
   
    /* Only make changes below this comment */
}

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;