/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    let arrayresult = []          //first we make an empty array
   arr.forEach((element) => {     //foreach where element is  
    console.log(element)          //each one of the elements of the array 
    if(element){                  // if condition 
        arrayresult.push(element) //  if element is not falsy
        }
    })
     return arrayresult;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;