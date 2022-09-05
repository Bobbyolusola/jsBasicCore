// let fruits = ['Apple', 'banana', 'Orange', 'lemon', 'Grapes'];
// let [a,b, ...rest] = fruits; // Array destructuring assign
// console.log(a, b, rest);

// const str = "Backbencher sits at the Back in the Back";
// const newStr = str.replace(/Back/g, "Front");
// console.log(newStr); // "Front"
//
// const studentsAge = [17, 16, 18, 19, 21, 17];
// const ableToDrink = studentsAge.filter( (age) => age > 18);
// console.log(studentsAge) // immutable
// console.log(ableToDrink) // returns new array according to the condition(condition has to be true)

// const numbers = [2,3,4,5];
// const newArr = numbers.map((item) => item+1);
//
// console.log(numbers); //IMMUTABLE
// console.log(newArr); // returns new array

// const numbers = [5, 10, 15];
// //const total = numbers.reduce( (accumulator, item) => accumulator + item);
// const total = numbers.reduce( (accumulator, item) => {
//     console.log(accumulator, item)
//     return accumulator + item
// }, 100);
// // returns result of actions
// //Immuntable
// console.log(total);

// const userPreviledges = ['user', 'user', 'user', 'admin', 'user'];
// const containsAdmin =  userPreviledges.some( (element ) => element === 'admin');
// //returns boolean
// //Immutable
// console.log(userPreviledges);
// console.log(containsAdmin);

// //const ratings = [2, 3, 5, 4, 3, 5]; // false
// const ratings = [3, 5, 4, 3, 5]; // True
// //returns boolean
// const goodOverallRatings = ratings.every( (rating) => rating >=3 ); // means every item must be >= 3
// console.log(goodOverallRatings);

// const names = ['sophia', 'george', 'Waldo', 'stephen', 'henry'];
// //const includeWaldo = names.includes('waldo'); // false cos of case sensitivity
// const includeWaldo = names.includes('Waldo'); // true cos of case sensitivity
// // returns boolean
// console.log(includeWaldo);

// const newArray = Array.from([2, 4, 6]);
//
// const newArray2 = Array.from([2, 4, 6], (item) => item+1);
// console.log(newArray);
// console.log(newArray2);

// const icecreamColors = {
//     chocolate: 'brown',
//     vanilla: 'white',
//     strawberry: 'red',
// }
// //const colors = Object.keys(icecreamColors);// returns keys of  the object
// //const colors = Object.values(icecreamColors);// returns values of the object
// //const colors = Object.entries(icecreamColors);// returns arrays of the object
// console.log(colors)

// const one = [1, 2, 3, 4];
// const two = [5, 6, 7, 8];
// const combinesArr = [...one, ...two];
// const combinesArr2 = [one, two];
// console.log(combinesArr); // returns 2  different variable arrays together
// console.log(combinesArr2); // returns in new arrays
//
// const object = {
//     name: 'Robert',
//     phone: 'iphone'
// };
//
// const object1 = {
//     name: 'Ihor',
//     car: 'Ford'
// };
//
// const newObj = {
//     ...object,
//     ...object1
// };
// console.log(newObj); //last key name was selected just as in css(name.name)
//
// //Object.freeze(newObj); // freeze method doesn't allows you to change or add more to the keys
// //Object.seal(newObj); // seal method allows you to change but won't ass more keys
//
// newObj.house = "Lviv";
// newObj.car = "Kia";
//
// console.log(newObj);

//OR

// const object = {
//     name: 'Robert',
//     phone: 'iphone'
// };
//
// const object1 = {
//     name: 'Ihor',
//     car: 'Ford'
// };
// const newObj = Object.assign(object, object1);
// console.log(newObj);

// let user = {
//     name: "Ihor",
//     ahe: 25,
//     phone: "+380090000003677",
//     email: "object@mail.com"
// };
//
// // let name = user.name;
// // console.log(name);
//
// //OR
//
// let {name, age, phone, role} = user;// same as user.name, user. age etc
//
// console.log(name, age, phone, role);

//
// let users = ["Ivan", "Petro", "Pavlo", "Ihor", "Bobby"];
//
// let [a,b,,,c] = users; // , makes it numos to the next string
// console.log(a);
// console.log(b);
// console.log(c);
//
// let arr = [1,2,[3,[3.1, 3.2],4],[5,6],7];
// console.log(arr.flat());
// console.log(arr.flat(2)); // flattens inner arrays