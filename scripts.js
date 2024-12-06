// let input= '1,a,z#,4\n,-3';

function add(inputNumbers){
//Input Validation
if( typeof inputNumbers === 'string' ||  inputNumbers === ''){
   
    //Remove negative numbers
    let cleanedNumbers = inputNumbers.replace(/-?\d+/g, match => {
       return match.startsWith('-') ? '' : match ; 
    });

    // Remove special characters
    let numbers = cleanedNumbers.replace(/[^0-9]/g, '' );
     
    //Parse the string to integers and filter array for non-numerics
    let finalNumbers = numbers.split(',')
     .map(num => parseInt(num, 10))
     .filter(num => !isNaN(num));

    
   return finalNumbers;           
   
}

// else return 0;


}
// console.log(add(input));

module.exports = add;