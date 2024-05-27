// String
let str_1 = 'Webbrain "ac" ademy'  // bittalik va ikkitalik qo'shtirnoqlarda faqat bitta line da yozish mumkin 2-linega o'tish uchun \n belgisidan foydalanamiz
let str_2 = "Webbrain ac 'ad' emy"
let str_3 = `Webbrain 
academy`// backtic quota  String malumotimizni xoxlagancha lineda yozishimiz mumkin
// Special characters -> Maxsus belgilar  backslash orqali biz maxsus belgilarni kiritishimiz mumkin \t - Tab  
console.log("Davron\"")//Davron"
let str = "Assalomu Alaykum"
console.log(str[2]);//s
for(chart of str){
    console.log(chart);
}// o'zgaruvchidagi barcha malumotlarni harfma harf massivga aylantirib beradi
console.log(str.slice(0,5));//Assal  slace 2 ta argumentni qabul qiladi birinchisi begin boshlanish 2-chisi end tugash positsiyasi
// slice va splice asosiy farqi slice yangi qiymat qaytaradi splice asil qiymatni o'zgartiradi
console.log(str.substring(0,9))//Assalomu   manfiy qiymat qabul qilmaydi
console.log(str.substr(4,4));//lomu belgilangan qiymatdan necha harf kesib olishni bildiradi length
let str1 = "Javascript developer"
console.log(str1.padStart(30,"*"));//pad boshi yoki oxiriga belgilar qo'yish 30 jami belgilar soni "*" belgi 30 taga yetmagan belgilarga qo'yiladi
console.log(str1.split(' '));// split-> yordamida string malumot turidan arrayga o'tishimiz mumkin
console.log(str1.localeCompare("Javascript")) //1
console.log(str1.startsWith("Java"));//tru