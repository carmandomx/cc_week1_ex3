/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/

/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
  /* Only make changes below this comment */

  //first evaluation, if "arr" not exist we send a warning or a second evaluation, for cases when arr is not a Array element we return a warning.
  if (!arr || !Array.isArray(arr)) {
    return console.warn("Please input a array");
  } else {
    //if all it's ok, we filter the array deleting all boolean values and return them in a new value "arrFilter"
    var arrFilter = arr.filter(Boolean);
    return arrFilter;
  }
  /* Only make changes below this comment */
};

console.log(youShallNotPass([]));
console.log(youShallNotPass([false, null, "", 0])); //[]
console.log(youShallNotPass(["hello world!", NaN, undefined, 1, 2])); //['hello world!', 1, 2]
console.log(youShallNotPass([10, false, "", "pass"])); //[10, 'pass']

/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;
