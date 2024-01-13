// let i = 0 //счётчик
// шаг 1 i = 0 console.log ("Hello World") 0 + 1 = 1 i = 1
// шаг 2 i = 1 i = 2 console.log ("Hello World")
// шаг 3 i = 3 console.log ("Hello World")
// шаг 11 i = 10 false
// while(i > 10){
//     console.log(i);
//     i = i + 1
// }
// do {
//     console.log("Hello world");
//     i = i + 1 // инкримент
// } while (i < 10);


// for(let i = 0; i < 10; i++ ){ // i++ = i + 1 // i-- = i - 1 //
//     console.log(i);
// }

// arr = ["a", "b", "c", "d", "e"]
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// for(let i = 10; i > 0; i--){
//     console.log(i);
// }

// let num = 10
// for(let i = 0; i <= 100000; i++) {
//     if (i % 10 === 0) {
//         console.log(i);
//     } 
// }

// let num = 111
// for(let i = 0; i <= 100000; i++) {
//     if(i % num === 0) {
//         console.log(i);
//     }
// }

// let num = 3
// for(let i = 0; i >= 0; i++) {
//     if(i > 100000) {
//         for(let a = i; i > 1000; a--) {
//             console.log(a);
//         }
//     }
// }

// const Num_1 = prompt("Введите первое число:")
// const Num_2 = prompt("Введите второе число:")
// const sign = prompt("Введите знак: 1 = +, 2 = -, 3 = *, 4 = /.")
// if (sign == 1) {
//     let d = Number(Num_1) + Number(Num_2)
//     alert (d)
// } else if (sign == 2) {
//     let d = Number(Num_1) - Number(Num_2)
//     alert (d)
// } else if (sign == 3) {
//     let d = Number(Num_1) * Number(Num_2)
//     alert (d)
// } else if (sign == 4) {
//     let d = Number(Num_1) / Number(Num_2)
//     alert(d)
// } else {
//     alert("error")
// }

// for(i = 1; i <= 1000; i++){
//     if(i % 2 === 0) {
//         console.log(`Even ${i}`);
//     } else {
//         console.log(`Odd ${i}`);
//     }
// }

// const arr = ["a", "b", "c", "d", "e", "f", "g"]
// for(i = 0; i < arr.length; i = i + 4) {
// for(i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (i % 4 === 0) {
//         console.log(arr[i]);
//     }
// }

// const arr = [1, 2, -12, 4, 5, 1, -7, 77, -2]
// for(i = 0; i < arr.length; i++){
//     if(arr[i] > 0) {
//         console.log(arr[i]);
//     }
// }

// const arr = ["a", "b", "c", "d", "e"]
// for(i = arr.length - 1; i > -1; i--){
//     console.log(arr[i]);
// }

// const arr = [1, 2, 3, -4, 5, -6]
// for(i = 0; i < arr.length; i++){
//     if (arr[i] < 0) {
//         // break
//         continue
//     }
//     console.log(arr[i]);
// }

// const sum =() => {
    
// }
// const sort = arr.sort((a, b) => a - b)
// const sort = arr.sort((a, b) => b - a)
// console.log(sort);

// const arr = [12,1,22,-4,3,5,6,-7]
// let max = 0
// let min = 0
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i]
    // } else if (arr[i] < min) {
    //     min = arr[i]
//     }
// }

// console.log(max);
// console.log(min);

// const arr = [12,5,7,8,2,3]
// let sum = 0
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum / arr.length);

// const sumMax = (arr) => {
//     let max = 0
//     for (i = 0; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     console.log(max);
// }
// sumMax([12, 4, 5, 3, 5])

// function positiveSum(arr) {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++) {
//         //Шаг 1  12 true 12 + 0 = 12 - sum
//         //Шаг 2  -1 false
//         //Шаг 3  32 true 12 + 32 = 44 - sum
//         //Шаг 4 -100 false
//       if (arr[i] > 0) {
//         sum += arr[i]
//       }
//     }
//     console.log(sum);
//   }
//   positiveSum([12, -1, 32,-100])

// let age = 21
// console.log(age > 18 ? "True" : " False");
// let result = age > 18 ? "True" : " False" // тернарный оператор
// if(age >= 18) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// const age = 60
// if (age <= 12) {
//     console.log("Ребёнок");
// } else if (age <= 19) {
//     console.log("Подросток");
// } else if (age <= 59) {
//     console.log("Взрослый");
// } else if (age >= 60) {
//     console.log("Пожилой");
// }

// function name(params) {
    
// }
// name("params")


// let dicloration = function() {

// }


// let arrow = (params) => {
//     console.log(result = params >= 18 ? "Y" : "N");
// }
// arrow(14)
// arrow(16)
// arrow(18)
// arrow(21)


// let finalAge = function(age) {
//     if (age >= 0 && age <= 12) {
//         console.log("Ребёнок");
//     } else if (age >= 13 && age <= 19) {
//         console.log("Подросток");
//     } else if (age >= 20 && age <= 59) {
//         console.log("Взрослый");
//     } else if (age >= 60) {
//         console.log("Пожилой");
//     }
// }
// finalAge(12)
// finalAge(15)
// finalAge(29)
// finalAge(82)

// const maxValue = (mass) => {
//     let max = 0
// for (i = 0; i < mass.length; i++) {
//     if(mass[i] > max) {
//         max = mass[i]
//     }
// }
// console.log(max);
// }
// maxValue([221, 12, 777, 1322, 4, 11112])

// // Создаем функцию maxValue, которая находит максимальное значение в массиве чисел.
// const maxValue = (mass) => {
//     // Инициализируем переменную max со значением 0 для хранения максимального значения.
//     let max = 0;
  
//     // Начинаем цикл, который будет перебирать элементы массива.
//     for (i = 0; i < mass.length; i++) {
//       // Проверяем, если текущий элемент массива больше текущего максимального значения max.
//       if (mass[i] > max) {
//         // Если условие истинно, обновляем max значением текущего элемента массива.
//         max = mass[i];
//       }
//     }
  
//     // После завершения цикла выводим максимальное значение в консоль.
//     console.log(max);
//   }
  
//   // Вызываем функцию maxValue с массивом чисел.
//   maxValue([222, 421, 12, 777, 13]);

// const finalValue = (arr) => { 
//     const a =  Math.max(...arr)
//     const b =  Math.min(...arr)
//     return(`Max = ${a}, Min = ${b}.`);
// }
// console.log(finalValue([1, 2, 3, 4]) );

// function sum(a){ // Объявление функции
//     
// }
// sum(7)
// sum(9)

// const arrow = (a) => { // стрелочная функция
//     console.log(a + 10);
// } 
// arrow(9)
// arrow(10)

// const arr = function(a) { //function expession
//     console.log(a + 10);
// }
// arr(10)
// arr(20)

// const arrow = (a, b) => a + b // сокращение
// console.log(arrow(10, 10));

// const arrow = a => a + 10 // сокращение
// console.log(arrow(10));

// const arr = (a) => {
//     console.log(result = a % 2 === 0 ? "Чётное" : "Не чётное");
// }
// arr(12)

// const arr = a => result = a % 2 === 0 ? "Чётное" : "Не чётное"
// console.log(sum(10));

// const arr = a => console.log(result = a % 2 === 0 ? "Чётное" : "Не чётное");
// arr(10)


// // Объявление функции str, которая принимает один аргумент a
// const str = (a) => {
//     // Преобразование строки a в массив символов и затем инвертирование его
//     const str_reverse = a.split("").reverse().join("");
    
//     // Восстановление порядка символов, инвертированных выше
//     const str_returns = str_reverse.split("").reverse().join("");
    
//     // Вывод результата в консоль, разделенного пробелом
//     console.log(`${str_reverse} ${str_returns}`);
// }

// // Вызов функции str с аргументом "abc"
// str("abc");

// const arr = str => str.toUpperCase();
// console.log(arr("aer"));


// const random = (a, b) => {
//     for(i = a; i < b; i++){
//         const num = Math.random()
//         if(num > a || num < b) {
//             return num
//         }
//     }
// }
// console.log(random(0, 20));

// const Random = (min, max) => {
//     let num = Math.random() * (max - min) + min;
//     return Math.floor(num)
// }
// console.log(Random(10, 20));

// const random = (min, max) => {
//     return Math.floor(Math.random() * (max - min) + min);
// };
// console.log(random(10, 20));

// let User = {
//     name:"Гоша",
//     age: 15
// }
// console.log(`${User.name} ${User.age} лет`);

// const num = {
//     randomNum (number) {
//         return number;
//     }
// }
// console.log(num.randomNum(5));

// console.log(`${meta.num(9)} ${meta.random(0, 10)}`);

// const random = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);;
// console.log(random(9, 10));

// = - Присвоение
// + - Плюс
// - - Минус
// / - Делить
// * - Умножить 
// ** - В степень
// % - остаток от диления
// == - Не строгое равенство
// === - Строгое равенство

// let a = 10 
// let b = "10"
// if (a === Number(b)) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// && - Логическое умножение
// || - логическое сложение
// != - Не строгое
// !== - Строгое

// let a = 10 
// console.log(++a);       
// console.log(--a);

// Конкотинация = сложение строк
// Интерполяция = сложение строк (New)
// let a = "Hallo"
// console.log(a.toUpperCase());
// console.log(a.split(" "));
// console.log(a.substr(0, 3));
// console.log(a.charAt(2));    

// let a = ["adf", 233, true, false]
// console.log(a[1] = 1000);

// if (a % 2 === 0) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// let a = 10
// console.log(a % 2 === 0 ? true : false);
// console.log(a % 2 === 0);

// const arr = ["hello", 123, true]
// for(i = 1; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(i = 0; i <= 10000; i++) {
//     if (i % 15 === 0 && i % 30 === 0) {
//         console.log(i);
//     }
// }


// let arr = [12, 44, 667, 334, 213, 4]
// let sum = 0
// for(i = 0; i <= arr.length; i++) {
//     console.log(sum += i);
// }

// let arr = [12, 3, -7, 123, -54, 23, -4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//         sum += arr[i];
//     }
// }
// console.log(sum);

// let arr = [12, 3, -7, 123, -54, 23, -4]
// let sum = 0
// for(i = 0; i <= arr.length; i++){
//     if (arr[i] > 0) {
//         sum += arr[i]
//     }
// }
// console.log(sum);



// function fizzbuzz(n) {
//     let result = 0
//     for(i = 0; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result += "FizzBuzz"
//         }
//         else if(i % 3 === 0) {
//             result += "Fizz"
//         }
//         else if(i % 5 === 0) {
//             result += "Buzz"
//         }
//         else {
//             result += 0
//         }
//         console.log(result.slpit( ));
//     }
// }
// fizzbuzz(7)




// function fizzBuzz(n) {
//     let result = [];
//     for (let i = 0; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//                 result += "FizzBuzz";
//             }
//             else if (i % 3 == 0) {
//                 result += "Fizz";
//             }
//             else if (i % 5 == 0) {
//                 result += "Buzz";
//             }
//             else if (i % 3 != 0 && i % 5 != 0) {
//                 result += i
//             }
//             add = result + 1
//         }
//     return add.split(" ");
// }
// console.log(fizzBuzz(15));

// const user = {
//     Name: "Max",
//     Age: 26,
//     Adress: "st. 21",
//     "phone number": 222333444555
// }
// user.Name = "Tallai"
// user.Password = "********"
// console.log(user.Name);
// console.log(user["phone number"]);
// console.log(user);

// const arr = [12, 20, 34, 65, 76, 5, 6]
// const filterSum = 20
// let result = []
// for(i = 0; i <= arr.length; i++) {
//     if(arr[i] > filterSum) {
//         result.push(arr[i])
//     }
// }
// console.log(result);

// const arr = [1,4,6,8,3,4,1,2]
// let SortedArray = arr.sort((a, b) => a - b)
// console.log(SortedArray);

// const str = ["apple", "banana", "dsafsdafsghaha", "Taalay", "danchik"]
// let longString = ""
// for(i = 0; i < str.length; i++) {
//     if(str[i].length > longString.length) {
//         longString = str[i]
//     }
// }
// console.log(longString);

// function fizzBuzz(n) {
//   let result = []
//   for(i = 0; i <= n.lenght; i++) {
//       if((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
//         result.push("FizzBuzz")
//       }
//       else if((i + 1) % 5 === 0) {
//         result.push("Buzz")
//       }
//       else if((i + 1) % 3 === 0) {
//         result.push("Fizz")
//       }
//       else {
//         result.push(i + 1)
//       }
//     }
//     if(i >= 1) {
//       return result
//     }
// }
// console.log(fizzBuzz(30));

// function findShort(s) {
//   let arr = s.split("")
//   let min = arr[0].length
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i].length < min) {
//       min = arr[i].length
//     }
//   }
//   return min
// }
// console.log(findShort("asdff asg asgd fghdjd asdsa hgfd"));

// function squareDigits1(num){
//   let str = num.toString();
//   let result = [];
//   for (let i = 0; i < str.length; i++){
//       result[i] = str[i] ** 2;
//   }
//   return Number(result.join(""));
// }

// function squareDigits2(num){
//   let arr = ("" + num).split("")
//   let result = []
//   for(let i = 0; i > arr.length; i++) {
//     let result2 = arr[i] * arr[i]
//     result = [...result,result2]
//   }
//   return +result.join("")
// }

// console.log(squareDigits1(23512));



// arr.forEach((el) => {// для перебора массива но когда не нужно ничего сохранять
//   console.log(el * 2);
// })



//метод map нужен для перебора массива и изменения его состовляющих
//при этом map не подходит для изменения размера массива
// const result = arr.map((el) => {
  // if(el % 2 === 0) {
  //   return el
  // }
// })
// console.log(result);

// const arr = [1,2,3,4]
// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] % 2 === 0) {
//     console.log(arr[i]);
//   }
// }

// const arr1 = [1,2,3,4]
// // //переберает массив и удаляет элементы которые не подходят под условия
// // //не может изменить элементы массива нужен только для сокращения массива
// const result1 = arr1.filter((el1) => {
//   return el1 * 2
// }) 
// console.log(result1);

// const arr = [1,2,3,3,4,4,5,6,7] 
// const result = arr.filter((el) => {
//   if(arr.indexOf(el) !== arr.lastIndexOf(el)) {
//     return el
//   }
// })
// console.log(result);
// const arr = [{id:1},{id:2},{id:3},{id:4}] 
// const result = arr.map((el) => {
//   return el.id
// })
// console.log(result);

// const arr = [1, 2, -3, -4, 5, 6, 4];
// const result = arr.filter((el) => {
//   if (el > 0) {
//     return el
//   }
// }).map((el) => {
//   return el + 10
// });
// console.log(result);


// const  user = [{name:"Alice", age:20},{name:"bob", age:13},{name:"Alex", age:25}]
// const result = user.filter((el) => {
//   if (el.age > 16) {
//     return el
//   }
// }).map((el) => {
//   return el.name
// })
// console.log(result);

// const numbers = [10,20,30,40,50]
// let sum = 0
// numbers.forEach((el) => {
//   sum += el
// })
// const avg = sum / numbers.length
// const result = numbers.map((el) => {
//   return el / avg
// })
// console.log(result);

// const arr = [123,4,5,6,56,234,55,53,222]
// let indexes = []
// arr.forEach((el, idx) => {
//   if(el % 2 !== 0) {
//     indexes = [...indexes, idx]
//   }
// })

// console.log(indexes); 

// const arr = [123,4,5,6,56,234,55,53,222]
// const result = arr.map((el, idx) =>{
//   if(el % 2 === 0) {
//     return null
//   }else {
//     return idx
//   }
// }).filter((el) => {
//   if(el !== null) {
//     return el
//   }
// })
// console.log(result);


// const result = arr.find((el) => {
//   if(el % 2 === 0) {
//     return el
//   }
// })
// console.log(result);
// //indexOf

// const arr = [1,2,3,4,5]

// const result = arr.reduce((acc,rec) => {
//   //acc = 0, res = 1, 0 + 1 = 1
//   //acc = 1, res = 2, 1 + 2 = 3
//   //acc = 3, res = 3, 4 + 3 = 7
//   return acc + rec
// }, 3)

// const result = arr.reduce((acc,rec) => {
//   return acc + rec
// }, 0)
// console.log(result);

// const arr = [1,2,3,4,5]
// const result = arr.reduce((acc, res) => {
//   if(res % 2 === 0) {
//     return acc + res
//   }else {
//     return acc  
//   }
  
// }, 0) 
// console.log(result);

// const arr = [1,-9,0,-12,23,2,3,-12,4,5]
// const result = arr.reduce((acc, rec) => {
//   if(rec > 0) {
//     return acc - rec
//   } 
//   return acc
// }, 0)
// console.log(result);

// const arr = [1,2,3,4,5,6]
// const result = arr.reduce((acc, rec) => {
//   if (rec % 2 ===   0) {
//     return [...acc, rec];
// }
// return acc;
// }, [])
// console.log(result);

// const arr = [true,true,true,false]
// const result = arr.reduce((acc, rec) => {
//  return acc * rec ? true : false
// }, true)
// console.log(result);

// const arr = [1,3,4,"dgas",true,"fasd"]
// const result = arr.reduce((acc, rec, idx) => {
//   acc[`field${idx + 1}`] = rec
//   return acc
// }, {})
// console.log(result);

// const fruit = ["apple", "banana", "pineapple"]
// const result = fruit.map((el, idx) => {
//   return (`${el}: ${idx}`)
// })
// console.log(result);

// const user = [{name:"Sasha", salaray:50000},{name:"Yarik", salaray:60000},{name:"Danchik", salaray:75000}]
// const result = user.reduce((acc, rec) => acc + rec.salaray, 0) 
// console.log(result);

// const arr = ["apple", "banana", "mango"]
// const result = arr.map((str) => str[0].toUpperCase() + str.slice(1))
// console.log(result);

// const user = [
//   { name: "phone", status: "active" },
//   { name: "computer", status: "not active" },
//   { name: "laptop", status: "active" },
//   { name: "xbox", status: "not active" }
// ];
// const result = user.filter((el) => el.status === "active")
// console.log(result);

// const user = [
//   { name: "phone", age: 25 },
//   { name: "computer", age: 30 },
//   { name: "laptop", age: 32 },
//   { name: "xbox", age: 26 }
// ];
// const result = user.find((el) => el.age >= 30)
// console.log(result);

// const arr = [3.4, 1.4, 5.7, 5.5]
// arr.forEach((el) => {console.log(Math.round(el));})


// function isLeapYear(year) {
//   if(year % 100 !== 0 && year % 4 === 0 || year % 400 === 0) return true
//     return false
// }
// console.log(isLeapYear(2015));

// function XO(str) {
//   str = str.toLowerCase()
//     if(str.split('x').length === str.split('o').length) {
//       return true
//     }
//     return false
// }
// console.log(XO("xooxo"));

// const args = [34, 15, 88, 2]
// const result = Math.min(...args)
// console.log(result);

// function digitize(n) {
//   let str = String(n)
//   return str.split("").map((el) => Number(el)).reverse()
// }
// console.log(digitize(2134));

// const arr = [1,4,6,8,3,4,1,2]
// let SortedArray = arr.sort((a, b) => a - b)
// console.log(SortedArray);

// function sumTwoSmallestNumbers(numbers) {  
//   numbers.sort((a, b) => a - b)
//   return numbers[0] + numbers[1]
// }
// console.log(sumTwoSmallestNumbers([10, 30, 40, 20]));

// function accum(s) {
//   // s = s.toLowerCase()
// 	// return s.split("").map((el, idx) => el.toUpperCase() + el.repeat(idx)).join("-") 
//   // return s.split('').map((el, idx) => (el.toUpperCase() + el.toLowerCase().repeat(idx))).join('-')
// }
// console.log(accum("abcd"));

// const obj = {
//   "strIngredient1": "Tequila",
//   "strIngredient2": "Triple sec",
//   "strIngredient3": "Lime juice",
//   "strIngredient4": "Salt",
//   "strIngredient5": null,
//   "strIngredient6": null,
//   "strIngredient7": null,
//   "strIngredient8": null,
//   "strIngredient9": null,
//   "strIngredient10": null,
//   "strIngredient11": null,
//   "strIngredient12": null,
//   "strIngredient13": null,
//   "strIngredient14": null,
//   "strIngredient15": null
// }
// const arr = Object.values(obj) 
// const result = arr.reduce((acc, rec) => {
//   if(rec) {
//         return rec + acc
//       }
//       return acc
// }, [])
// console.log(result);


// let result = []
// for(i = 1; i <= 15; i++) {
//   const value = obj[`strIngredient${i}`]
//   if(value) {
//     result.push(value)
//   }
// }
// console.log(result);