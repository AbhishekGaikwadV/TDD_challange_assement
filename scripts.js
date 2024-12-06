
 let input = '1,a,z#,4\n';
function add(inputNumbers){
//Input Validation
if( typeof inputNumbers === 'string' ||  inputNumbers === ''){
   
    // //Remove negative numbers
    // let negativeNumbers= (inputNumbers.match(/-\d+/g) || []).map(num => parseInt(num, 10));

    // //Throw exception with the negative numbers found
    // if(negativeNumbers.length > 0){
    //     throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
    // }         

    // Remove special characters
    let numbers = inputNumbers.replace(/[^0-9,]/g, '' );

   //Parse the string to integers and filter array for non-numerics
    let finalNumbers = numbers.split(',')
     .map(num => parseInt(num, 10))
     .filter(num => !isNaN(num));


   return finalNumbers;
 }

}

console.log(add(input));

module.exports = add;