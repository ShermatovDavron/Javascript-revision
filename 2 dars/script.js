// 1-Data Types
// Javascriptda 8 ta Data types bor bular number,string,object,boolean,null,undefined,Bigint,symbols
// Primitive      bergan qiymatimi o'zgaruvchiga to'g'ridan tog'ri bog'lanadi
// Number - int float umumiy hamma sonlar kiradi 
// Bigint - number bilan ifodalab bo'lmaydigan katta sonlarni ifodalaydi
// String - So'zlarni ifodalaydi "" '' `` shunday ifodalanishi mumkin
// Null - o'zgaruvchi elon qilingan va unda null qiymati berilgan
// Undefined - o'zgaruvchi elon qilingan lekin unga hech qanday qiymat biriktirilmagan
// Symbols - belgilar
// Non Primitive         bergan qiymatimiz o'zgaruvchiga lenk orqali bog'lanadi
// object - quti sifatida qarasak bo'ladi 

let num = 20;
let str = "Davron";
let bool = true;
let undefined
let nul = null;
let obj = {
    age: 22,
    name: "Davron",
    faculty: 'logist',
    isMarried: false
}

// 2 Type Conversion 
console.log("" + 1 + 0);  //10 
console.log("" - 1 + 0);//-1
console.log(true + false);//1
console.log(6 / "3");//2
console.log("2" + "3");//23
console.log(4 + 5 + "px");//9px
console.log("$" + 5 + 4);//$54
console.log("4" - 2);//2
console.log(" -9 " + 5);//"-95"
console.log(" -9 " - 5);//-14
console.log(null + 1);//1
console.log(undefined + 1);//NaN
console.log(" \t \n" - 2);//-2
console.log("Type")
console.log(typeof ("" + 1 + 0));  // srting
console.log(typeof ("" - 1 + 0));//number
console.log(typeof (true + false));//number
console.log(typeof (6 / "3"));//number
console.log(typeof ("2" + "3"));//string
console.log(typeof (4 + 5 + "px"));//string
console.log(typeof ("$" + 5 + 4));//string
console.log(typeof ("4" - 2));//number
console.log(typeof (" -9 " + 5));//string
console.log(typeof (" -9 " - 5));//number
console.log(typeof (null + 1));//number
console.log(typeof (undefined + 1));//num
console.log(typeof " \t \n" - 2);//Nan
//3 Operators
// Math keywordi bu matematik amallar bajarilishini bildiradi va amal kalit so'zidan oldin qo'yib ketishimiz kk
console.log(Math.floor(25.25));
//tenglik belgilari = == ===  , = -> belgisi o'zlashtirish operatori deyiladi yani let a=5 desal 5 solini a o'zgaruvchiga o'zlashtirayabdi
// ==-> tenglikni qiymatini tekshiradi lekin typeni tekshirmaydi  5='5' true
console.log(5=='5');
// === -> qatiiy tenglik qiymatini va typeni tekshiradi 5='5' false
console.log(5='5');
// Icrement and Dicrement 
// Increment ++ qiymatni 1 ga oshiradi
let a = 5
console.log(a++);//5
console.log(++a);//7
console.log(a--);//7
console.log(--a);//5
// sonni ixtiyoriy darajaga ko'tarish uchun ** dan  foydalanamiz
console.log(5**5);
let b = 0;
console.log(b+=a);