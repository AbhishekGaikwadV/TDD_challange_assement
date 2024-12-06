function add(inputNumbers){
//Input Validation
if( typeof inputNumbers === 'string' ||  inputNumbers === ''){
   
//   let onlyNumbers = Number(inputNumbers.replace(/[^0-9]/g, ''));
 let numbers = Number(inputNumbers.replace(/[^0-9]/g, '' ));
                   
  return numbers; 

}

}


module.exports = add;