/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
  let resArr = []; //Declare a new array where the Truthy values will be stored if there's any
  
  //Now we loop over the array's content
  for (let i = 0; i < arr.length; i++) {
    //Make a conditional where the value is tested to be truthy or falsy  
    if (arr[i]) {
      resArr.push(arr[i]); //If the value evaluates to True, we push it into the new array
    }
  }
  //Return the new array
  return resArr;
    /* Only make changes below this comment */
}


/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;