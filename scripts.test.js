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

// Test 1
//    it(' Input validation, return empty string for empty input string', () =>{
//    expect(add('',dbMock)).toBe('');
//    });


//    Test 2
//     it('Remove negative numbers', () =>{
//     expect(add(dbMock[5],dbMock)).toBe('1,a,z#,4\n,');
//    });
 
//  Test3
//    it('Remove special characters', ()=> {
//     expect(add('1,a,z#,4\n,')).toBe('14');
//  });

//    Test 4
 //   it('Parse the string to integers and filter array for non-numerics', () => {
//    expect(add('14')).toEqual(expect.arrayContaining([14]));
//  });

//    Test5
    // it('Sum all the values in the array and return the sum as an integer', () => {
    // expect(add(dbMock[5],dbMock)).toBe(5);
    //   });

    //    Test6
        // it('remove negative number throw error and if multiple display them with exception', () =>{
        // expect(() => add(dbMock[5])).toThrow('negative numbers not allowed -3');
        // });

          //Test7
          it("Parse the string to integers and filter array for non-numerics", () =>{
            expect(add(dbMock[5])).toEqual(expect.arrayContaining([1,4,3]));
          })
  
});