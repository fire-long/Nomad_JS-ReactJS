//alert("hi");

//console 창에 기록을 남김.
//'과 " 모두 문자열로 사용 가능하지만, 둘을 교차해서 쓸 수는 없음.
//console.log("lalalalala");


// 두 가지 변수 정의 방법(생성할 때 사용)
//(1)const는 상수(constant) '
//(2)let
//const a = 5;
//const b = 2;//!="2"
//const very_long_variable_name = 0;//python의 snake case
//python에선 const가 필요하지 않음.
//const veryLongVariableName = 0;//JS의 camel case
//let myName = "jinaen";

//console.log(a+b);
//console.log(a*b);
//console.log(a/b);
//console.log("hello "+ myName);

//myName = "JYP";
//console.log("your new name is "+ myName);

// const amIFat = null;//null!=false. null means nothing.
// let something;//variable은 있지만 undefined
// console.log(something, amIFat);

//const mon = "mon";
//const tue = "tue";
//const wed = "wed";
//const thu = "thu";
//const fri = "fri";
//const sat = "sat";
//const sun = "sund";

// const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
//String에서 Array로 만든 것
//const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
//const nonsense = [1, 2, "hello", false, null, true, undefined, "jinaen"];

//Get Item from Array
//console.log(daysOfWeek[4]);
//console.log(nonsense);

// Add one more day to the array
//daysOfWeek.push("sun");

//console.log(daysOfWeek);

//const toBuy = ["potato", "tomato", "pizza"];
//toBuy.push("kimbab");
//console.log(toBuy[2]);
//console.log(toBuy[9898989898]);//undefined



//console.log("hi");
//const playerName = "jinaen";
//const playerPoints = 121212;
//const playerHandsome = true;
//const playerFat = "little bit";

//player[0] == name
//player[1] == points
//const player=["jinaen", 121212, true, "little bit"];
//player.name
//player.points
//player.handsome

//objects만들기
// const player={
//     name : "jinaen",
//     points : 10,
//     fat : true,
// };
//console은 object이고, 그 안에 log가 있음
// console.log(player);
// console.log(player.name);
// player.name;
// console.log(player["name"]);
//update할 수도 있음. constant여도 object 안에 있으므로 object 자체는 그대로 유지되면서 update되는 것임.
// player.fat = false;
//property 추가 가능
// player.lastName = "potato";
// player.points = player.points + 15;
// console.log(player.points);


//functions
// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is "+nameOfPerson + " and I am " + age);
// }
// sayHello("nico", 10);
// sayHello("jinaen", 24);
// sayHello("koi", 21);

// function plus(firstNumber,secondNumber){
//     console.log(firstNumber + secondNumber);//a,b 가 없으면 NaN
// }
// function divide(a,b){
//     console.log(a/b);
// }
// //plus(8, 60);
// plus(60, 8);
// divide(98,20);

// const player={
//     name : "jinaen",
//     sayHello: function(otherPersonName){
//         console.log("hello! " + otherPersonName + " nice to meet ya");
//     },
// }
// console.log(player.name);
// player.sayHello("lynn");
// player.sayHello("nico");

// const a = 5;
// console.log(a);

//계산기 숙제
//const calculator = {
//    add:function(a,b){
        // console.log(a+b);
        //alert(a+b);
//        return a+b;
//    },
//    divide:function(a,b){
//        // console.log(a/b);
//        //alert(a/b);
//        return a/b;
//    },
//    minus:function(a,b){
//        // console.log(a-b);
//        //alert(a-b);
//        return a-b;
//    },
//    times:function(a,b){
//        // console.log(a*b);
//        //alert(a*b);
//        return a*b;
//    },
//    powerof:function(a,b){
//        // console.log(a**b);
//        //alert(a**b);
//       return a**b;
//    }
//}
// calculator.add(1, 2)
// calculator.minus(1, 2)
// calculator.times(1, 2)
// calculator.divide(1, 2)
// calculator.powerof(1, 2)
// console.log(calculator.plus(2, 3)); // undefined

// const age = 96;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);

//const plusResult = calculator.plus(2, 3);
//const minusResult = calculator.minus(plusResult, 10);
//const timesResult = calculator.times(10, minusResult);
//const divideResult = calculator.divide(timesResult, plusResult);
//const powerofResult = calculator.powerof(divideResult, minusResult);

//console.log(plusResult);
//console.log(plusResult);
//console.log(plusResult);
//console.log(plusResult);

//const age = parseInt(prompt("How old are you?"));
//parseInt(age); // string -> int
//console.log(age);
//console.log(isNaN(age));
//string을 넣으면 NaN으로 parsing됨.
//if(isNaN(age) || age<0){
//    console.log("Please write a real positive number");
//}//else{
//    console.log("Thank you for writing your age.");
//}
//else if(age<18){
//    console.log("you are too young.");
//} else if(age>=18 && age <= 50){
//    console.log("you can drink.");
//} else if(age > 50 && age <= 80){
//    console.log("you should exercise.");
//} else if(age>80){
//    console.log("you should know your age of drinking. grandma...");
//}
// || : or

