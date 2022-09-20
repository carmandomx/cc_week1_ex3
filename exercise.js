/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */

    var falsy;
    var trueArr = [];

    for (i = 0; i < arr.length; i++) {

        falsy = Boolean(arr[i]);

        if (falsy === true) {

            trueArr.push(arr[i]);

        }

    }

    return trueArr;

}

youShallNotPass([7, "ate", "", false, 9]);
// returns a new array that is filtered accordingly.



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;