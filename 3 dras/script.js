// Logical Operator
// And && Or || Not ! bular bir nechta shartlarni tekshirish uchun qo'llanilidi
let a = 5, b = 2, c = 3
if (a == 5 || b == !c) {
    console.log('Bajarildi')
}
// A vs a ni taqqoslaganda a katta chiqdi sababi ASCII table boyicha taqqoslanadi belgilar.
if ('a' > "A") {
    console.log('a harfi katta');
} else {
    console.log('A harfi katta');
}

if("apple">"pineapple") console.log('false1');
if(undefined==null) console.log('true2');
if(undefined===null) console.log('false3');
if('2'>'12') console.log('true4');
if(null== "\n0\n") console.log('false5');
if(null == +"\n0\n") console.log('false6');

// If else
// if bilan if else ni ishlatish farqlari if har bir shartni tekshirib chiqadi if else birinchi shartdan boshlab tekshirib boshlaydi va to'g'ri shart chiqganda shartni tekshirish to'xtatiladi
// nullish and Or, ?? and || bu ikkisini farqi shundaki:
// ?? -> Nan false '' 0 qiymatlarini ham to'g'ri deb biladi va qaytaradi || bu esa notog'ri deb qaytaradi keyingi qiymatni qaytaradi
console.log(null || 1);//1
console.log(undefined || 2);//2
console.log(0 || 3);//3
console.log('' || 4);//4
console.log(false || 5);//5
console.log(null ?? 1);//null
console.log(undefined ?? 2);//undefined
console.log(0 ?? 3);//0
console.log('' ?? 4);//''
console.log(false ?? 5);//false

// masala
let title = "Webbrain academy";

if(title=="Webbrain academy"){
    console.log(true);
}
if (title!="Webbrain academy") {
    console.log(false);
}

title=="webbrain academy"?console.log(true):console.log(false)
title==0?console.log(true):console.log(false);

if (title=='webbrain academy')
     console.log(true);
else
 console.log(false);
//  Nullish operators
console.log('' ?? 'malumot topilmadi')// Masalan bizga bazadan malumot kelishi kerak agarda bazada ushbu foydalanuvchi bor lekin malumotlari yo'q bo'lsa unda '' qiymat qaytadi va biz nullish yordamida '' qiymatni olishimiz mumkin null va undefined false deb xisoblaydi
// ? ?? farqi nullish operatorda faqat true xolatini olsa bo'ladi 
console.log(null && 55);//null
console.log(''|| 66 );//66
console.log(''??77);//''

// Switch
// Switch operatori bir o'zgaruvchi berilgan bo'ladi va faqat shuni qiymatini tekshiradi
let name = "Webrain academy"

switch(name){
    case 'Webrain academy':console.log(true);
    break;
    default:console.log(false);
}