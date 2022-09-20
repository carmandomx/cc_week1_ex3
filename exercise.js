/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */

    /*We create a new array that will have the cleaned array received
    And a especific index for that new array*/
    let clean = [];
    let cleandex = 0;

    /*As every 'falsy' value is considered as false, we start the process
    of cleaning the original array by asking if the valua a 'index' position
    is true, if it´s true, we save it in the cleaned array, if not, we go
    to the next position and continue*/
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]){
            clean[cleandex] = arr[index];
            cleandex++;
        }
    } 

    //Now we just return the cleaned array
    return clean

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;