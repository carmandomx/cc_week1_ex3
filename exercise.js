/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    let len_arr=arr.length
    let non_falsey=[]
    for (let i=0;i<len_arr;i++){
        if (arr[i]){
            non_falsey.push(arr[i])
        }
    }
    return non_falsey
    /* Only make changes below this comment */
}

/*youShallNotPass(['ALAN',23,0,'',[1,2],3,null])/



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;