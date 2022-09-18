/**
 * Template Literals (Template String)
 */
// let title = "soail media network";
// let desc = "soial app like facebook";
// let markUp = `
//      <div class="card">
//        <div class="child">
//          <h1>${title}</h1>
//          <p>${desc}</p>
//          <h3>${20+20}</h3>
//        </div>
//      </div>
// `;

// document.write(markUp);

// let post_title ="Elzero" , post_description = "Elzero web school", created_date ="25/10";

// let markUp =  `
//       <div class="card" >
//         <h3>${post_title}</h3>
//         <p>${post_description}</p>
//         <span>${created_date}</span>
//       </div>
// `;

// document.write(markUp.repeat(4));

/*########################################################################################################### */
/**
 arithmtic opreators
 + Addition
 - Substraction
 * Multiplication
 / division
 ** Exponentiation (ES7)
  % Modules ( Division remainder)
 */
// var a = 10;
// var b = 10 ;
// console.log(20+20);
// console.log(10 + ' alamin');
// console.log(10-20);
// console.log(10-"alamin");//NaN
// console.log(typeof NaN);
// console.log(10 * 20);
// console.log(20 *- 10);
// console.log(20 / 4);
// console.log(20 / 3);
// console.log(7 % 2);
// console.log(7 ** 2);
// console.log(a ** b)

/**#############################################################################################
 * unary orator
 */

// console.log(+100);
// console.log(+'100')
// console.log(+"alamin 1234");
// console.log(-"+200")
// console.log(Number("-100"))

/**#############################################################################################
 * Type Corection (Type Casting)
 *  +
 *  -
 *  ""
 * true false
 * 
 */
// let a = "10";
// let b = 20;
// let c = true;
// console.log(a + b)//1020
// console.log(+a + b)//30
// console.log(a * b)//200
// console.log(a - b) // -10
// console.log(true - false)
// console.log(a + b + c)//1020true
// console.log(b + c + a)//2110
// console.log( +a + b + c)//31


/**
 * #############################################################################################
 * Assignment Operators
 */
// let a = 10;
// a = a + 20;
// a += 70;//a = a + 70
// a -= 50;//a = a - 50;
// a /= 5 ;//a = a / 5;
// a *= 5;//a = a * 5;
// a %= 3;//a = a % 3;
// console.log(a);

/** #############################################################################################
 * Challenge 1
 */

// let a = 10;
// let b = "20";
// let c = 80;

// //console.log(++a + +b++ + c++ - +a++)

// /*
//  Challenge  2
// */

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// //console.log(-d*+e + f*--g) //2000
// console.log(-+d + ++e*++g + ++f) //173


/**#############################################################################################
 * Number
 * Duoble precision
 * Syntactic Sugar " "
 * e
 * **
 * With Dicmail
 * Number + BigInt
 * Number min value
 * Number max value
 */

// console.log(1000000)
// console.log(1_000_000)
// console.log(1e6)
// console.log(10 ** 6)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_VALUE  +10000)



/**#########################################################################################
 * Number Methods
 * Two dots to  call a method
 * toString()
 * toFixed()
 * parseInt()
 * parseFloat()
 * isInteger() [ES6]
 * isNaN() [ES6]
 */

// console.log((100).toString())
// console.log(100..toString())
// console.log(100.645556.toFixed(2))
// console.log(parseInt("100"))
// console.log(parseFloat("1254.78 hi"))
// console.log(Number.isInteger('100'));//false
// console.log(Number.isInteger(10.22));//false
// console.log(Number.isInteger(100));//true
// console.log(Number.isNaN('alamin'));//false



/* ######################################################################################
  Math Object
  -round()
  -ceil()
  -floor()
  -min()
  -max()
  -pow()
  -random()
  -trunc()  [Es6]
 */

//   console.log(Math.round(99.2));//99
//   console.log(Math.round(99.5));//100
//   console.log(Math.ceil(99.2));//100
//   console.log(Math.floor(99.9));//99
//   console.log(Math.min(100,200,41,-3,-1));//-3
//   console.log(Math.max(100,50,60,758,2000));//2000
//   console.log(Math.pow(2,4));//16 => 2**4
//   console.log(Math.random());
//   console.log(Math.trunc(99.5));//99

/**######################################################################################
 * Number challenge 
 */
// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

//find smallest number in all varibles and return integer

//console.log(Math.min(parseInt(a),parseInt(b),parseInt(c),parseInt(d)));

// console.log(Math.pow(a,Math.trunc(d)));

// console.log(Math.trunc(d));
// console.log(Math.round(d))
// console.log(Math.floor(d))
// console.log(parseInt(d))
// console.log(parseInt((++b / (Math.ceil(d)))));



/**#################################################################################
 * Part 1
 * String Methods
 * Access With Index
 * Access With charAt()
 * length
 * tirm()
 * toUpperCase()
 * toLowerCase()
 * chain method
 */

//let theName = '  ahmed  ';

// console.log(theName);
// console.log(theName[2]);
// console.log(theName[5]);
// console.log(theName.charAt(1));
// console.log(theName.charAt(5))
// console.log(theName.length)
// console.log(theName.trim())
// console.log(theName.toUpperCase());
// console.log(theName.toLocaleLowerCase());
// console.log(theName.trim().charAt(2).toUpperCase());//chain methods =>M

/**Part2
 * String Methods
 * indexOf(value[Mand] , start [opt] 0)
 * lastIndexOf(value [Mand] , start [opt] length)
 * slice(start [Mand], End[opt] Not include end)
 * repeat(times) [ES6]
 * split(separator [opt], limt[opt])
 */

// let a = "Elzero web school";

// console.log(a.indexOf('web'));
// console.log(a.indexOf('web',8));
// console.log(a.lastIndexOf('e'));
// console.log(a.slice(0,-2));
// console.log(a.slice(5));
// console.log(a.repeat(5));
// console.log(a.split(" ",5));

/** Part 3 
 * String Methods
 -substring(Start [Man] , End[opt] not include the end)
 - start > end Will Swap
 - Start < 0 Start from 0
 - use length to get last character
 -substr(Start [Mand], Characters to Extract)
 -Start >= length = " "
 -Negative Start  from the end
 -includes(value [ Man ], Start[ Opt ] Defalut 0) ES6
 - startWith(value [ Mand ] , Start [ opt ] default 0) ES6
 -endWith( value [ Mand] ,length [ Opt ] default full length ) ES6
*/

// let  a = "Elzero web school";

// console.log(a.substring(2,6));
// console.log(a.substring(6 ,2));
// console.log(a.substring(-10, 6));
// console.log(a.substring(-2,1));
// console.log(a.substr(2,6));
// console.log(a.substring(a.length-1));
// console.log(a.substr(4,6));
// console.log(a.includes('web'));
// console.log(a.includes('web',8));
// console.log(a.startsWith('Elzero'));
// console.log(a.endsWith('l'));
// console.log(a.endsWith('o'));


// /**String Challeneg */

// let  a = "Elzero web school";

// // Include this methods in your solution [ slice(), charAt()]

// console.log(a.charAt(2).toUpperCase()+a.slice(3,6));
// // H 8
// console.log(a.slice(13,14).toUpperCase().repeat(8));

// console.log(a.slice(0,6).split());//[Elzero]

// console.log(`${a.substr(0,6)} ${a.substr(11).charAt(0).toUpperCase()}${a.substr(12)}`);//Elzero School
// console.log(`${a.charAt(0).toLowerCase()}${a.charAt(1).toLowerCase()}${a.substring(2).toLocaleUpperCase()}`)//elZERO WEB SCHOOL


/**Comparison operators  ########################################################################
 - == Equal
 - != Not Equal
 - === Identical
 - !== Not Identical
 - > larger than
 - >= larger than or equal
 - < smaller than
 - <= smaller than or equal
*/

// console.log(10 == "10"); //compare value only
// console.log(10 != "10"); //compare value only
// console.log(100 === "100"); //compare value and type

// console.log(100 !== "100");//true
// console.log(100 !== 100);//false

// console.log(10 > 20);
// console.log( 10 > 10);
// console.log(10 >= 10);

// console.log(10 < 20);
// console.log(10 < 10)
// console.log(10 <= 10)

// console.log(typeof "Osama" === typeof "ahmed")


/** Logical Operators ##################################################
 - ! Not
 - && And
 - || Or
 */

//  console.log(!true);
//  console.log(true && true);
//  console.log(true ||  false);
//  console.log(false || false);
//  console.log(false && false);

//  console.log(10 == "10" && 10 > 8 &&  10 <50)

/** If Conditions ################################################################
 - if
 - else if
 - else

 if(condition){
  //Block of Code
 }
 */

//  let price = 100 ;
//  let discount = false;
//  let discountAmount = 30 ;
//  let countery = "Sudan"; 
//  if(discount === true)
//  {
//     price -= discountAmount;
//  } else if(countery === "Sudan") {
//       price -= 50;
//  } else if (countery === "Egypt") {
//        price -= 40;
//  } else {
//    price -= 10;
//  }

//  console.log(price);

/**  Nested  if condition ################################################################### */

//  let price = 100 ;
//  let discount = false;
//  let discountAmount = 30 ;
//  let countery = "Egypt"; 
//  let student = true;
//  if(discount === true) {
//    discount -= discountAmount;
//  } else if(countery === "Sudan"){
//    if(student === true) {
//      price -= discountAmount +30;
//    } else {
//      price -= discountAmount +10;
//    }
//  }else {
//    price -= discountAmount +5;
//  }
// console.log(price)

/** Conditional (ternary) opertor ##########################################################*/

// let theName = "mona";
// let theGender = "female";
// let theAge = 32;

// if (theGender === "Male") {
//    console.log("Mr")
// } else {
//    console.log("Mrs")
// }

// theGender === "Male" ? console.log("Mr") : console.log("Mrs");

// let result = theGender === "Male" ? "Mr" : "Mrs";

// document.write(result);

// console.log(theGender === "Male" ?  "Mr" : "Mrs" );
// console.log(`Hello ${theGender === "Male" ? "Mr": "Mrs"} ${theName}`);


/** Logical or || #####################################################################
 - null  + undefined +  any falsy value
 -  nullish  coalescing operator ??
 - Null + Undefined
 */

//  let price =null;

//  console.log(`the price ${price || 200}`);
//  console.log(`the price is ${price ?? 200}`);

/**
 -- If challenege
 */

 //let a = 10;

//  if(a <  10 ){
//     console.log(10);
//  } else if (a >= 10 && a <= 40) {
//     console.log("10 to 40");
//  } else if (a < 40){
//    console.log("> 40")
//  } else {
//    console.log("Unknow");
//  }
// let a1 =  a < 10;
// let a2 = a >=10 && a <= 40 ;
// let a3 = a < 40;
//  a1  ? console.log(10)
// : a2 ?  console.log("10 to 40")
// : a3 ? console.log("> 40")
// : console.log("Unknow");


//  let st = "Elzero web school";

// if ((st.length*2).toString() === "34") {
//    console.log("Good");
// }


// if(st[st.indexOf("w")].toLowerCase() === "w"){
//    console.log("Good");
// }

// if (st.length !== "string") {
//    console.log("Good");
// }

// if(typeof st.length ==="number")  {
//    console.log("Good");
// }

// if (st.slice(0,6)+st.slice(0,6)==="ElzeroElzero") {
//    console.log("Good")
// }

/**Switch conditions 
 -syntaic
 switch(condition) {
   case 1:
   bolck of  code
   breake;
   case 2:
   block of  code
   break;
   defalut:
   bolck of  code
 }
 - defalut oredering
 - multaiple match
*/
let  day = 0;
switch (day) {
    case 0 :
      console.log("satruday")
      break;
   case 1 :
      console.log("sunday");
      break;
   case 2 :
      console.log("manday");
      break;
   default:
      console.log("Unkow day")
}