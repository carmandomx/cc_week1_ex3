/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
  /* Only make changes below this comment */

  // Create new array using the filter method on "arr"
  // This method returns the elements that meet the callback function, which is (x) => x.
  //This filters all the falsy values
  const filteredArr = arr.filter((x) => x);

  return filteredArr;

  /* Only make changes below this comment */
};

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;
