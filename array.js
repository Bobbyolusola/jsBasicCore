// // Array is a collection of data types that has its values and lengths.
// let array = [1, 2, 3, null, undefined, {key: "value"}]
// // console.log(array);
// // console.log(array.length);
// let newArray = array
//
//
// newArray.push("new");
// console.log(newArray); //The changes here affects the array. its mutated
// console.log(array);// mutated by the newArray.push

// let arr = new Array(5); /// shows empty array and length as 5
// console.log(arr);
//
// let arr1 = [5];
// console.log(arr1);

// let arr1 = ["one", "two"];
// console.log(arr1);// ['one', 'two'}
// console.log(arr1[3]);// undefined
//
// for(let i = 0; i<arr1.length; i++){
//     console.log(arr1[i]);
// }// one
//  // two

// let fruits = ['orange', 'apple'];
// let veggies = ['potato', 'tomato'];
//
// // let salad = fruits.concat(veggies);
// //
// // console.log(salad); // method mutates the array to which it was used
// // console.log(fruits);// mutates as allows array to be used on itself
// // console.log(veggies);// does not mutate
//
// let salad = fruits.join(); // orange,apple
// //let salad = fruits.join(" and ");// orange and apple
// console.log(salad)// // returns stringNot mutated

// let numbers = [1, 10, 3, 11, 4, 5];
// let sort = numbers.sort();
// console.log(sort);// sorts increases the first digits numerically
// console.log(numbers);// mutations on phone numbers

// console.log(numbers.shift());// removed the first digits of numbers
// console.log(numbers);
//
// console.log(numbers.pop());// removed the last digits of numbers
// console.log(numbers);

// console.log(numbers.unshift(1));// returns length of mutated arrays
// console.log(numbers); // mutates the array

// console.log(numbers.push(1, 2, 3, 5,));// returns length of mutated arrays
// console.log(numbers); // mutates the array

// console.log(numbers.splice( 1,  2))// starts from count 1 to the second count and delete the rest counts
// console.log(numbers); // mutates the array

// console.log(numbers.slice( 1,  4))// starts from count 1 and cut the rest from count 4
// console.log(numbers.slice( 1,  -3)) // slices from the right counts pf 3 starting from 1 and not 0
// console.log(numbers); // does not mutates the array

// let arr = [10,20,30,40,50];
// arr.forEach((item)=> console.log(item))
// //arr.forEach((item index)=>console.log(index, ":" item));

// let obj = {
//     name: "Ihor",
//     role: "Mentor"
// }
// let arr = [10, 20, 30, 40, 50, 60];

// for(value in obj){
//     console.log(value)
// }
// for(value in arr){
//     console.log(value)
// }
// for(value of arr){
//     console.log(value)
// }

// console.log(arr.indexOf(40))// 3
// console.log(arr);
//
// let newArr = Array.from(arr);
// newArr.push(70);
// console.log(newArr);
// console.log(arr);

//Assignment
//1. Write a function arrCopy(arr) that copies an array without changing the original arr.
// const arr1 = arrCopy([1,2,3]) – will write the array [1,2,3] into the variable.
// const arr2 = arrCopy([1,2,3,[10,20]]) - will write the array [1,2,3,[10,20]] into the variable.

// let arrCopy = [1,2,3];
// arr1 = arrCopy
// console.log(arr1);
//
// let arrCopy = [1,2,3,[10,20]];
// arr2 = arrCopy
// console.log(arr2);

//2. Write a function arrToString(arr) that accepts an array arr of numbers and returns an array with strings:
// const arr1 = arrToString([1,2,3]) - will write the array ['1','2','3'' into the variable.
// const arr2 = arrToString([10,200,3333]) - will write the array ['10','200','3333'] into the variable.

// const arrToString = ([1,2,3]);
// let  arr1 = arrToString.join();
// console.log(arr1);

// const arrToString = ([10,200,3333]);
// let arr2 = arrToString.join();
// console.log(arr2);


// 3. Write the getLength(arr) function, which accepts an array arr of tapes and returns a new array with the length of the elements of those tapes:
// const arr1 = getLength(['Ivan','Pavlo','Ira']) - will write the array [4,5,3] into the variable.
// const arr2 = getLength(['Oleksiy','Andriana']) - will write the array [7,8] into the variable.

// getLength = (['Ivan', 'Pavlo', 'Ira']);
// arr1 = getLength = (['Ivan', 'Pavlo', 'Ira']);
// console.log(arr1);


//4.Write a function removeDuplicates(arr) that accepts an array arr from tapes and returns a new array where duplicate elements from the array arr are excluded (ignore case sensitivity):
// const arr1 = removeDuplicates(['html','css','html','js']) - will write the array ['html','css','js'] into the variable.
// const arr2 = removeDuplicates(['html','css','js','html','js','python','js','scss']) - will write the array ['html',' css','js','python','scss']).

// let arr1 = ['html','css','html','js'];
// let removeDuplicates = [...new Set(arr1)];
// console.log(removeDuplicates);

// let arr2 = ['html','css','js','html','js','python','js','scss'];
// let removeDuplicates = [...new Set(arr2)];
// console.log(removeDuplicates);


