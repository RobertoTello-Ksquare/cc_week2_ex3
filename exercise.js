/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    let result = str;// we make a variable named result 
    const regex_2 = /([a-z])([A-Z])/g//we inicialize the conditions for our regex to get each upper case letter that has a lowercase letter before it   

    const regex = /([A-Z])([A-Z])/g//but we put it into 2 conditions so we could have in the $1 and $2 our selected variables

    result = str.replaceAll(regex ,'$1-$2'); //then we replace it with upper case letters 

    result = result.replaceAll(regex_2, '$1-$2');//and then with lower cases

    result = result.replaceAll(' ', '-');//we replace the empty spaces with a dash 

    result = result.toLowerCase();//to finallice we convert the string to lower case

    return result;
    
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;