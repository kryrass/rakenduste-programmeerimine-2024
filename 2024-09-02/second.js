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

// 7. Ülesanne: AF printida "Hello (nimi) ja kasutada string literals 

const greet = (name = "World") => `Hello ${name}`;

console.log(greet());

console.log(greet("Kryslin"));

// 8. Ülesanne: liida igale elemendile juurde +5, et uuele muutujale omandaks

const newArray = [1, 2, 3, 4, 5];

const addedArray = newArray.map((element) => element +5);

console.log(addedArray);

// 9.  Ülesanne: erinevad parameetrid

const threeParameters = newArray.map((element, index, array) => {
    console.log(element, index, array)

    return element + 5
});

console.log({threeParameters});

// 10. Muudame objektiks, et console.log-ides oleks paremini märgata

//console.log({threeParameters: threeParameters});

// Filter

// 11. Ülesanne: filtreerida välja uuesti massiivist kõik elemendid, mis on suuremad kui 4

const Array = [1, 2, 3, 4, 5, 6];

const filteredArray = Array.filter((element) => element > 4);

console.log({filteredArray});
console.log({filteredArray: filteredArray});
console.log(filteredArray);

// 12. Ülesanne: Luua nimede massivi põhjal objektide massiv, 
//mis koosneb sellisel kujul objektidest:

const names = ["Anni", "Mari", "Mati", "Juku"];

const objectifiedNames = names.map(name => {
    return {
        name: name,
        age: name.length + 20,
        email: `${name}@company.com`,
        address: `${name} Street 55`,
        username: name.split("").reverse().join(""),    
    }
});

console.log({ objectifiedNames });

// {
//   name: 'Anni',
//   age: 24,
//   email: 'anni@company.com',
//   address: 'Anni Street 55',
//   username: 'innA'
// }

// 13. Tahame juurde lisada pikkuse ja jätta eelnevad kõik andmed samaks, spread syntax

let kryslin = {
    name: "Kryslin",
    school: "TLÜ",
};

kryslin = {...kryslin, height: 164 }
console.log({ kryslin });

// 14. Tahame muuta eelnevatest andmetest midagi jättes teised samaks

console.log( 1 == "1");
console.log(1 === "1");

// 15 async/await Promise

const myPromise = () => {
    return new Promise(resolve => setTimeout(() => resolve("done"), 1000));
}
const runPromise = async () => {
    console.log(await myPromise());
};

runPromise();

setTimeout(() => console.log("timeout"), 2000); // et midagi ära oodata
