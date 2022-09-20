/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    
    // Variable which will save the not falsy values
    let notFalsy = []

    /* This for will search a not falsy value in the arr if the condicion matchs true
    otherwise it will do nothing */
    for (let i = 0; i < arr.length; i++) {

        /* This works because all falsy values like: false, Nan, 0, "", undefined 
        are equivalent to false */
        if (arr[i]) {

            /* The ".push(arr[i])" is attaching those values who arent falsy 
            in to the "notFalsy" variable */
            notFalsy.push(arr[i]);
        }
        
    }

    // Just return the array in "notFalsy" variable
    return notFalsy;

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;