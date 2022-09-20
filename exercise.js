/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */

    let nElements= []; //First I declare an array nElements, which will be the array in which I will add the elements that are not falsy.
    
    for (let index = 0; index < arr.length; index++){ //Then, I create a for loop to loop through each element within the given array.
        
        if(arr[index]){ //I start to validate if each element is not falsy.

            nElements.push(arr[index]); //I add the elements that are not falsy to a new array.
        }
    }
    
    return(nElements); //Return the new array without falsy elements.

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;