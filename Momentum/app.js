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

// const title = document.getElementById("title");
// // console.log(title);
// title.innerText = "Got you!"//html이 아니라 js에 의해 텍스트가 변화함.

// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// const title = document.getElementsByTagName("h1");
// console.log(title);

// const title = document.querySelector(".hello h1");
// const title = document.querySelector(".hello h1:first-child");
// const title = document.querySelector("#hello");
// const title = document.getElementById("hello");
//querySelector : CSS 방식으로 element 검색
// const title = document.querySelectorAll(".hello h1");

// const title = document.querySelector(".hello h1"); //hello라는 class 내부의 h1를 가져오기
// const h1 = document.querySelector("div.hello:first-child h1");
// console.log(title);
// //element 내부를 보고 싶으면
// console.dir(title);
// title.innerText = "Hello";

// title.style.color = "blue";
// function handleTitleClick() {
//   const clickedClass = "clicked";
//   const currentColor = h1.style.color;
//   let newColor;
//   console.log("title was clicked!");
//   console.log(h1.style.color);
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
//   if (h1.className === clickedClass) {
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
//사실 위의 코드는 아래 하나로 다 정리됨
//   h1.classList.toggle("clicked");
// }

// function handleMouseEnter() {
//   h1.innerText = "Mouse is here!";
// }
// function handleMouseLeave() {
//   h1.innerText = "Mouse is gone!";
// }
// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy() {
//   alert("copier!");
// }
// function handleWindowOffline() {
//   alert("SOS no WIFI");
// }
// function handleWindowOnline() {
//   alert("ALL GOOOD!");
// }
//javascript가 대신 함수를 활성화해줄테니까 (), 즉 실행은 지금하지 않음
// h1.addEventListener("click", handleTitleClick);
//h1.onclick = handTitleClick;
// title.addEventListener("mouseenter", handleMouseEnter);
// h1.onmouseenter = handleMouseEnter;
//addEventListener를 선호하는 이유 : removeEventListener로 event listener를 제거할 수 있기 때문임.
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
// const loginForm = document.getElementById("login-form"); //selector면 # 붙여야 함
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
function onLoginBtnClick() {
  console.dir(loginInput.value);
  console.log("click!!!!");
}
loginButton.addEventListener("click", onLoginBtnClick);
