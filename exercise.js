/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */

    //Verification of lenght
    console.log(arr.length/2);

    //variable for the new array
    let arr_result = [];
    //Cycle to check all the elements in the arrray.
    
    for(let i = 0;i<arr.length;i++){
        if (arr[i]) {
            //if the element it is NOT a falsy, add the element to my new array (the answer) 
            arr_result.push(arr[i]);
          }
    }

    //Show in the console to confirme my result
    //console.log(arr_result)

    //return of my array
    return arr_result;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;