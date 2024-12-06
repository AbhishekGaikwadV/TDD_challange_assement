

function add(inputNumbers){
//Input Validation
if( typeof inputNumbers === 'string' ||  inputNumbers === ''){
   
    //Remove negative numbers
    let cleanedNumbers = inputNumbers.replace(/-?\d+/g, match => {
       return match.startsWith('-') ? '' : match ; 
    });

    // Remove special characters
    let numbers = cleanedNumbers.replace(/[^0-9,]/g, '' );
     
    //Parse the string to integers and filter array for non-numerics
    let finalNumbers = numbers.split(',')
     .map(num => parseInt(num, 10))
     .filter(num => !isNaN(num));

    // Sum all the values in the array and return the sum as an integer
   return finalNumbers.reduce((num,sum) => num + sum, 0);           
   
 }

}



module.exports = add;