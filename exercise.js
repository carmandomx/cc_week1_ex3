/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    var finalArr = []; //FinalArr will storage a new array with not falsy value

    for(var i = 0; i < arr.length; i++){
        //if the condintion is true the variable is not a FALSY VALUE.
        if (arr[i]) {
            finalArr.push(arr[i]); //With push we are adding values to finalArr
        }
    }
    
    return finalArr; //We return finalArrr without falsy values
    
    /* Only make changes below this comment */
}



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;
