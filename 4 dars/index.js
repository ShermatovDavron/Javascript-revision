// For loop -> for loop qayta qayta yoziladigan kodlarni soddalashtirish uchun ishlatiladi for loopda 3 ta parametr bor boshlang'ich qiymat, shart, qiymat oshishi
// for loopda var va let farqi let for scopi {} uchida ishlaydi var esa umumiy o'zgaruvchi elon qiladi
// 1 masala
let str = 'Web Brain Academy'
let text = ''
for(let i=0; i<str.length;i++){
    if('A'<=str[i] && str[i]<='Z'){
        text+=str[i]
    }
}
console.log(text);
//2 masala
let str1 = 'Webbrain Academy founded 2019. Now it is 4 years old'
let num = ''
for(let i=0; i<str1.length; i++){
    if(str1[i]<=9 && str1[i]>=0){
        num +=str1[i]
    }
}
console.log(num);
// 3 masala | pul birligini topish
let usd = ''
let str2 = `Frontend $100 1oy uchun. Umumiy 6 oy davom etadi. oldindan to'lov qilsa $20 chegirma bor`
for(let i=0; i<=str2.length;i++){
   if(str2[i]=='$'){
    usd+=str2[i]
    for(let j=i+1; +str2[j]>=0 && +str2[j]<=9 && str2[j]!=' ';j++){
        usd+=str2[j]
    }
    usd+=', '
   }
}
console.log(usd);
//4 masala
let str3 = `Frontend $100 1oy uchun. Umumiy 6 oy davom etadi. oldindan to'lov qilsa ¥ 20 chegirma bor`
for(let i=0; i<str3.length;i++){
    if(str3[i]=='$' || str3[i]=='¥'){
        console.log(str3[i]);
    }
}