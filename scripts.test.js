const add = require('./scripts.js');

dbMock = [
'',
'1',
'1,2',
'1,2,3,4,5,'
];

describe('Initalizing addFunction', () =>{
   it('return empty string for empty string', () =>{
     expect(add('',dbMock)).toBe('');
   });
    // expect(add('1',dbMock)).toBe();
    
   
});