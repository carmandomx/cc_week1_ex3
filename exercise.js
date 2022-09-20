/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    // First, we need a variable that storages the array that we will return, in this case it is empty
    const falsyValues = []
    // Then we make a for loop to check every element inside of the given array of values and work over them
    for (let i of arr) {
        // Here I am comparing if each element is truthy, because as the given array is full of falsy values, if I compare as a truthy is is going to be right
        // So we use the method push to storage those values that pass the test
        if (i) falsyValues.push(i);
    }
    // Once the loop finishes, we return the array with the remaining values
    return falsyValues
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;