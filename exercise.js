/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    var workarray=[]; //Empty array to store the truly values
    var j=0; //Variable to count the good ones
    var arrvalue; //undefined variable to temp store values

    for (let i = 0; i < arr.length; i++) //checking all the values
    {

        //Comparing if it is falsy
        arrvalue=arr[i];


        if(arrvalue > "" && arrvalue!==undefined) //not empty neither undefined
        {
            if(arrvalue !== null
                && arrvalue !== NaN && arrvalue != 0 && arrvalue !==false)
                {

                    workarray[j]=arrvalue;
                    j++;

                }
                
                
        } 

        
            
        

    }
    return workarray;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;
