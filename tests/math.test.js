/*** SOMA */
const soma1 = require('../math');
test('soma 2 + 3 igual a 5', () => { 
expect(soma1.add(2, 3)).toBe(5); 
}); 

const soma2= require('../math');
test('soma 7 + -2 igual a 5', () => { 
expect(soma2.add(7, -2)).toBe(5); 
}); 

const soma3= require('../math');
test('soma 2 + -5 igual a -3', () => { 
expect(soma3.add(2, -5)).toBe(-3); 
}); 

const soma4= require('../math');
test('soma -8 + 3 igual a -5', () => { 
expect(soma4.add(-8, 3)).toBe(-5); 
}); 



/*** SUBTRAÇAO */
const subs1= require('../math');
test('subtração 2 - 3 igual a -1', () => { 
expect(subs1.subtract(2, 3)).toBe(-1); 
}); 

const subs2= require('../math');
test('subtração 7 - 3 igual a 4', () => { 
expect(subs2.subtract(7, 3)).toBe(4); 
});  

const subs3= require('../math');
test('subtração 79 - 97 igual a -18', () => { 
expect(subs3.subtract(79, 97)).toBe(-18); 
}); 

const subs4= require('../math');
test('subtração 5 - 4 igual a 1', () => { 
expect(subs4.subtract(5, 4)).toBe(1); 
}); 



/*** MULTIPLICAÇAO */
const multi1= require('../math');
test('multiplicação 2 * 3 igual a 6', () => { 
expect(multi1.multiply(2, 3)).toBe(6); 
}); 

const multi2= require('../math');
test('multiplicação 7 * -4 igual a -28', () => { 
expect(multi2.multiply(7, -4)).toBe(-28); 
}); 

const multi3= require('../math');
test('multiplicação 9 * 0 igual a 0', () => { 
expect(multi3.multiply(9, 0)).toBe(0); 
}); 

const multi4= require('../math');
test('multiplicação 8 * 5 igual a 40', () => { 
expect(multi4.multiply(8, 5)).toBe(40); 
}); 



/*** DIVISÃO */
const divi1= require('../math');
test('divisão 6 / 3 igual a 2', () => { 
expect(divi1.divide(6, 3)).toBe(2); 
}); 

const divi2= require('../math');
test('divisão 9 / 2 igual a 4.5', () => { 
expect(divi2.divide(9, 2)).toBe(4.5); 
});

const divi3= require('../math');
test('divisão 0 / 15 igual a 0', () => { 
expect(divi3.divide(0, 15)).toBe(0); 
});

const divi4= require('../math');
test('divisão 75 / 5 igual a 15', () => { 
expect(divi4.divide(75, 5)).toBe(15); 
});

const divi5= require('../math');
test('divisão 3.9 / 1.3 igual a 3', () => { 
expect(divi5.divide(a, b)).toBe(a/b); 
});