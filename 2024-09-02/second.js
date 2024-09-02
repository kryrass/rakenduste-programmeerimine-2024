// 1. Ül Luua array numbritega ja leia spetiifilise numbri index

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const otsitavNumber = 4;

console.log(numbers.indexOf(otsitavNumber));

//üleval minu, all õpetaja

const array = [1, 2, 3, 4, 5];

function findIndex(array, num) {
    return array.indexOf(num);
}

console.log(findIndex(array, 5));

//arrow functions
// 2. Ülesanne: Funktsioon, mis liidab 2 numbrit kokku ja tagastab summa

function addNumbersFn(a, b){
    return a + b;
}

console.log(addNumbersFn(5, 2));

// 3. Ülesanne kirjuta ümber arrow funktsioonina

const addNumbersArrowFn = (c, d) => {
    return c + d;
};

console.log(addNumbersArrowFn(3, 1));


// => tähendab return!
//4. Ülesanne: kirjuta ümber shorthand arrow funktsioonina

const addNumbersShortArrowFn = (e, f) => e + f;

console.log(addNumbersArrowFn(7, 1));

// Nested
// 5. Ülesanne: funltsioon sellisel kujul, et saaks välja kutsuda seda nii:
function addNumbersNested(num1) {
    return function (num2) {
        return num1 + num2;
    };
}

console.log(addNumbersNested(6)(4));

// 6. Ülesanne: Loo samast funktsioonist arrowfunktsioon

const addNumbersNestedArrow = (num1)  => (num2)  => num1 + num2;

console.log(addNumbersNestedArrow(2) (5));