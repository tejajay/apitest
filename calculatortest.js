const calculator = require('./calculator')

//test case 1 
test('string with a single number should result in the number itself', () => {
    expect(calculator.add('1')).toBe(1);
  });

  //test case 2

  test('string with two numbers separated by comma should result in the sum of the numbers',
   () => {
    expect(calculator.add('4,5')).toBe(9);
  });

  //test case 3
  test('string with three numbers separated by comma should result in the sum of the numbers',
   () => {
    expect(calculator.add('2,8,4')).toBe(14);
});
 
// test case 4
test('string with four numbers separated by comma should result in the sum of the numbers',
 () => {
    expect(calculator.add('2,0,4,5')).toBe(11);
});

// test case 5
test('string with - numbers separated by comma should result in the sum of the numbers',
()=>{
  expect(calculator.add('-10,-5')).toBe(-15);
});



//test case 7
test('string with 2 number should result in the product of two numbers', () => {
    expect(calculator.multiply('2,3')).toBe(6);
  });

  //test case 8
test('string with 3 number should result in the product of 3 numbers', () => {
    expect(calculator.multiply('2,3,5')).toBe(30);
  });
//test case 9
test('string with division of two numbers',()=>{
  expect(calculator.division(10,5)).toBe(2)
})