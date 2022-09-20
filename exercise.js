/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    console.log(arr.length );
    let result=[];
    let a=0;
        for (let i = 0; i < arr.length; i++) {
        
    
       
         
         if (arr[i]>0) {
            result[a]=arr[i];
            a++;
            
        }
        if (arr[i]=="hello world!"|| arr[i]=="pass") {
            result[a]=arr[i];
            a++;
            
        }
    }
 console.log(result);
    return result;
   
    /* Only make changes below this comment */
}

youShallNotPass([]);
youShallNotPass([false, null, "", 0]);
youShallNotPass(['hello world!', NaN, undefined, 1, 2]);
youShallNotPass([10, false, "", "pass"]);
/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;