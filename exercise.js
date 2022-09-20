/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
        // Initialize the variable arrTruthy as an empty array
        let arrTruthy = [];
        // Evaluate with a foreach the received array
        arr.forEach(element => {
            /* 
                if the element evaluated is truthy then it is added to the arrTruthy array 
            */
            if(element){
                arrTruthy.push(element);
            }
        });
        // array without falsy values is returned
        return arrTruthy;

    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;