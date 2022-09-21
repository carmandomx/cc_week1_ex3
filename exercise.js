/* *Instructions*
    
    There's something called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    
    // Create a local array to create the return array. 
	const arrTruthy = new Array();

	// Add a new item to a the new array for each item on the provided array.
    for (const item of arr) {
        if (
            typeof item !== 'undefined' && 
            !Number.isNaN(item) && 
            item !== "" && 
            item !== false && 
            item !== null && 
            item !== 0 && 
            item !== -0 && 
            item !== 0n
        ) {
            arrTruthy.push(item);
        }
    }
    // Return the new array without falsy elements.
    return arrTruthy;
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;