
// // new function practice

// // by prompt adding using parameters and arguments
// let num1 = +prompt("Please Enter a First number for addition");
// let num2 = +prompt("Please Enter a second number for addition");
// function sum(value1, value2) {
//     if (isNaN(value1) || isNaN(value2)) {
//         console.log("invalid value")
//     } else {
//         // console.log(num1)
//     var display = value1 + value2;
//     }
//     //console.log(display)
//     return display
// }
// let result=sum(num1, num2);
// console.log(result);


// // / another format



// let num_1 = +prompt("Please Enter a First number for addition");
// let num_2 = +prompt("Please Enter a second number for addition");
// function sum(value1, value2) {
//     if (isNaN(value1) || isNaN(value2)) {
//         console.log("invalid value")
//     } 
//     var display = value1 + value2;
//     console.log(display)
//     return display
// }
// sum(num_1, num_2);





// // another question in function ;

// var products = [
//     { name: "parse", price: 2000, isDiscounted: true },
//     { name: "shoes", price: 1400, isDiscounted: true },
//     { name: "pants", price: 1000, isDiscounted: false }
// ];
// function applyDiscount(price) {
//     var discount = (price * 50) / 100;
//     return discount
// }

// for (var i = 0; i < products.length; i++) {
//     if (products[i].isDiscounted) {
//         document.writeln(
//             "<h4> name: " + products[i].name + " price:  <s> " + products[i].price + " </s>Discount rates: " + applyDiscount(products[i].price) + ".")

//     } else {
//         document.writeln(
//             "<p>" + products[i].name + ": " + products[i].price,
//             " No Discount. </p> "
//         );
//     }
// }


// // call back function

// function alertcall(name, callback, againcallback) {
//     console.log("hello", name);
//     callback(10, 8);
//     againcallback(10, 100);
// }
// alertcall("junejo", function (a, b) {
//     console.log(" a * b :", a * b);
//     console.log("this is a call back function")
// },
//     function (a, b) {
//         console.log("a + b ", a + b);
//         console.log("hello this is a another call back");
//     }
// )


// function hello() {
//     console.log("a * b: ", a * b)
// }
// alertcall(name,hello,againcallback)








// // practice


// function factorial(num2){
//     if(num2<=0){
//         num2=1
//     }else{
//         for(let i=num2;i>=1;i--){
//  console.log(num2 +=i)
//         }
//     }return num2                 //agr return kroga to necha wali multipplication hogi wrna nhi hogi
// }
// let hello=factorial(3)*8
// console.log(hello)



// // obj practice            yeh chalana hai;
// let object_function={
//     name: "umair",
//     myname: function(){
//         console.log("my name is "+ this.name)
//     }
// }
// object_function.myname()

// //  yeh chalana hai 
// let setinterval=setInterval(function(){      //or an arrow function whatever you like  ()=>{}
// console.log("how r you")
// },1000)


// setTimeout(
//     function(){
//         clearInterval(setinterval);        //clear interval ma ek value dedeta hain lekin setInterval and setTimeout ma function and milliseconds
//         console.log("clear interval")
//     },7000)



