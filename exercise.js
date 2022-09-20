/* *Instructions*
    
    There's somethign called git  in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    let remainingValues=[];
    let arrSize = arr.length;
    let remainingValue;
    console.log(arrSize);
    if(arr.length==0){
        remainingValues=arr.slice();
    }else{
        for(let i=0;i<arrSize;i++){

            
            if(Boolean(arr[i])){
                remainingValues.push(arr[i]);
            }
        }
        
    }
    
    console.log("hola "+ remainingValues);
    return remainingValues;

    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;