const add = require('./scripts.js');

dbMock = [
'',
'1',
'1,2',
'1,2,3,4,5',
'1,a,z#,4\n',
];

describe('Initalizing addFunction', () =>{
//    it(' Input validation, return empty string for empty input string', () =>{
//      expect(add('',dbMock)).toBe('');
//    });

   it('Remove non-numeric characters from input parameter', () => {
    expect(add(dbMock[4],dbMock)).toBe(14);
   });
    // expect(add('1',dbMock)).toBe();
    
   
});