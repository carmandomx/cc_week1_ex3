/* *Instructions*
    
    There's somethign called git  in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    // Answer array
    let remainingValues=[];
    let arrSize = arr.length;
    // console.log(arrSize);
    // Search for truthy items inside the array 
     for(let i=0;i<arrSize;i++){ 
            if(Boolean(arr[i])){
                // Pushing truthy items in a different array
                remainingValues.push(arr[i]);
            }
    }  
    return remainingValues;

    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;