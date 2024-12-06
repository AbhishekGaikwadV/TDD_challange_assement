const add = require('./scripts.js');

dbMock = [
'',
'1',
'1,2',
'1,2,3,4,5',
'1,a,z#,4\n',
'1,a,z#,4\n,-3',
];

describe('Initalizing addFunction', () =>{
//    it(' Input validation, return empty string for empty input string', () =>{
//      expect(add('',dbMock)).toBe('');
//    });

  
    it('Remove negative numbers', () =>{
      expect(add(dbMock[5],dbMock)).toBe('1,a,z#,4\n,');
    
   })
    
    
   
});