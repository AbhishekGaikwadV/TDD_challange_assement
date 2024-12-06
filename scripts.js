let input= '1,a,z#,4\n,-3';
function add(inputNumbers){
//Input Validation
if( typeof inputNumbers === 'string' ||  inputNumbers === ''){
   

    let cleanedNumbers = inputNumbers.replace(/-?\d+/g, match => {
       return match.startsWith('-') ? '' : match ; 
    });
    
  return cleanedNumbers;           
//   
}

// else return 0;


}
console.log(add(input));

module.exports = add;