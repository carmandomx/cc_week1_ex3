/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */

    //We establish a bool var to make a separation of what falsy value is and what not
    //we go through the array with a for cicle and when a value is valid, it is stored
    //in a newArray, at the final we return that

    let falsy;
    let newArray = [];
    for(var i=0;i< arr.length; i++ ){

        falsy = Boolean(arr[i]);
        if(falsy == true){
            newArray.push(arr[i]);
        }

    }   
    return newArray;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;