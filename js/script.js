//1.1
let fisrtNumber = 0.1;
let secondNumber = 0.2;

let sum = fisrtNumber + secondNumber;
console.log(sum.toFixed(1));

//1.2
let number = 2;
let string = "1";

let sumStringNumber = number + Number(string);
console.log(sumStringNumber);

//1.3
let userNumber = prompt('Вкажіть обсяг флешки в ГБ');
let howManyFiles = (userNumber * 1024) / 860;

alert(`Ви можете помістити ${Math.floor(howManyFiles)} файли`);

//2.1
let userMoney = prompt('Вкажіть скільки у Вас грошей');
let userChocolate = prompt('Вкажіть скільки коштує шоколад');
let howManyChocolate = Math.floor(userMoney / userChocolate);

alert(`У вас вийде ${howManyChocolate} шоколадки` + ' ' + `Ваш залишок ${userMoney % userChocolate}`);

//2.2
let userNumb = +prompt('Введі своє тризначне число, а я його переверну');

let firstNumb = userNumb % 10;
let secondNumb = (userNumb % 100 - firstNumb) / 10;
let lastNumb = Math.floor((userNumb % 1000 - (firstNumb + secondNumb)) / 100);


alert(`Вуаля, тримай ${firstNumb}${secondNumb}${lastNumb}`);

//3.1
let deposit = prompt("Введи сумму свого вкладу:");
let percent = 0.05;
let months = 2;

let interest = deposit * (percent / 12) * months;

alert(`Сумма нарахованих відсотків: ${interest.toFixed(2)} грн`);

//3.2
//TODO Що повернуть вирази:
//2 && 0 && 3
//!!! цей вираз поверрне '0', тому що оператор && приймає значення - false
// 2 || 0 || 3
//!!! цей вираз поверрне '2', тому що оператор && приймає значення - true

//2 && 0 || 3
//!!! цей вираз поверрне '3', тому що оператор &&(приорітетний)


