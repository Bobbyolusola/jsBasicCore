// const obj = { // In Objects, the key is all to value.
//     key: "value",
// }

// An object can hold all the data types including a function.
// const user = {
//     userName: "bobby33",
//     firstName: "Bobby",
//     lastName: "olusola",
//     age: 33,
//     value: null,
//     bool: true,
//     getUser(){
//
//     }
// }
// // console.log(user);
// console.log(user.userName);// bobby33
// console.log(user.jshjhdh);// Undefined


// let obj = new Object();// degraded js way to create object called constructor object
// let obj = {}; // upgraded way to create object called literal object

//let obj = new Object({username: "bobby33", firstName: "Bobby"}); //Another way to create object with functions
//let obj = {username: "bobby33", firstName: "Bobby"}; //Another way to create object with functions
//console.log(obj);


//NOTE: VALUES can be passed into an object like shown below;

// let data = "age";
// const user = {
//     userName: "bobby33",
//     firstName: "Bobby",
//     lastName: "Olusola",
//     age: 33,
//     value: null,
//     bool: true,
 //   "Date of birth": "10-05-1989", // strings can be used as key and values too.
    // getUser(){
    //     console.log(`Hello, my name is ${this.firstName}`) // using this.firstname will give the values(bobby) to the key
    // }
    //user.getUser(); //hello bobby


//     getUser(a,b){
//         console.log(`Hello, my name is ${a} ${b}`) // using this.firstname will give the values(bobby) to the key
//     }
//user.getUser(user.firstName, user.lastName);


//         getUser(key,value){
//               this[key] = value;
//     }
// }


// user.getUser("gender", "male");
// console.log(user);


// let newUser = user;
// console.log(user)
// console.log(newUser); //The same as the value of user as newUser was assigned to user.
// console.log(newUser === user);

//console.log(user[data]); //33. // age was assigned to data

// console.log(user.gender); //undefined //cos there is no gender in the const user.
//
// user.gender ="Male";



//delete user.age
//console.log(user); //age:33 will be removed from the keys and values.
//console.log(user["Date of birth"]); // 10-05-1989.

// console.log(user.gender); // Male //cos the value gender was created in the previous line of code.
//console.log("userName" in user); //returns true // to check the key in the const user


let data = "age";
const user = {
    userName: "bobby33",
    firstName: "Bobby",
    lastName: "Olusola",
    age: 33,
    value: null,
    bool: true,
    friends: {
        friendsOne: {
            userName: "Bobby"
        },
        friendsTwo: {
            userName: "Jamil"
        }
    }
}
// //console.log(user.friends.friendsTwo.userName); //Jamil
// user.friends.friendsTwo.userName = "John";
// console.log(user); //Will be John in friendsTwo

// console.log(JSON.stringify(user)); //it will turn the object user into strings
// console.log(JSON.parse(JSON.stringify(user))); //it will clone our objects and make two objects to be the same.

// object.freeze(user)// Freeze doesn't allowed the existing values to be changed and doesn't allow additional values

// object.seal(user)//seal allows to change existing case but not chnaging new case in an object

// for(key in user){
//     console.log(key) //shows the keys in all the objects
// }

// function Student(){
//     this.name = "Bobby";
//     this.position = "mentor";
// }

// let student = new Student();
// console.log(student);


// function Student(a, b){
//     this.name = a;
//     this.position = b;
//     this.showData = function(){
//         console.log(`Name ${this.name}, position ${this.position}`)
//     }
// }
// let student = new Student(a = "bobby", b = "student");
// let student1 = new Student(a = "Ihor", b = "mentor");
// console.log(student, student1);
// student.showData();

//NOTE: two objects are never equal in function construction

user = {
    name: "Bobby"
}

user1 = {
    name: "Bobby"
}
//console.log(user === user1); // False cos two objects are not equal even if it carries the same value and key.
//console.log(JSON.stringify(user) === JSON.stringify(user1)); // stringify makes two objects to be equal

