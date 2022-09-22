/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
  /* Only make changes below this comment */

  //We created a new array when we collect all new elements.
  let arrFilter = Array();
  //first evaluation, if "arr" not exist we send a warning or a second evaluation, for cases when arr is not a Array element we return a warning.
  if (!arr || !Array.isArray(arr)) {
    return "Please input a array";
  } else {
    //if all it's ok, we do a loop for evaluate each elemen for array.
    for (let i = 0; i < arr.length; i++) {
      //if in the array the element exist (truthy) push it in our new array "arrFilter"
      if (arr[i]) {
        arrFilter.push(arr[i]);
      }
    }
    //return the new array without falsy elements.
    return arrFilter;
  }
  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;
