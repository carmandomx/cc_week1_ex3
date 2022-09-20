/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
   
    /* Only make changes below this comment */
    let newArr = [];
    arr.forEach((k) => {
      if (k) {
        newArr.push(k);
      }
    });
    return newArr;
  }
  let arr = [0, 0, 22, 16, 17, null, "itk", false, NaN, 22, "de-hi-games", undefined, ""];
  console.log(youShallNotPass(arr));



/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;