// Function -> Bu kodlar toplamini bitta qutiga solish va qayta foydalanish imkonini beradi
//  3 xil functions bor decloration function ,arrow function, expression function
// Decloration function js filemizda xoxlagan joyimizda ishlatishimiz mumkin
function MaxNumber(a,b){
   return Math.max(a,b)
}
console.log(MaxNumber(3,6));

const getchangeNumber = (a,b=5)=>{
    let c=b;
    b=a;
    a=c;
    return {a,b}
}
console.log(getchangeNumber(15,25));

const a = function(a){
    return a
}
console.log(a(5));
// Clean code -> funcsiya nomlarini qoidalar bo'yicha to'g'ri yozishga aytiladi masalan bir narsani olmoqchi bo'lsak get bilan boshlashimiz kk 
// tekshirmoqchi bo'lsak check bilan boshlaganimiz yaxshi va camelCase bilan yozishimiz kk 
// return and without return -> shunday funktsiyalar borki unda faqat qandaydir ishlarni bajarsak bo'ldi qolganlarida esa qandaydir qiymat qaytarishini kutamiz
// shadow variable global o'zgaruvchini functsiya ichida o'zgartirish o'zgartirish 