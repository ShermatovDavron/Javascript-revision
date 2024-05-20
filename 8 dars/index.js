// Number
// Decimal number -> 10 sanoq sistemasidagi son 1 2 3 4 5 6 7 8 9 0
// Binary number -> 2 lik sanoq sistemasidagi number 0 1
// Hex number-> 16 lik sanoq sistemasi
console.log(1_000_000_000);//1000000000
console.log(parseFloat(10.9));//10.9
console.log(parseInt(10.9));//11
console.log(Number(10.25).toFixed());//10
console.log(Number(0.000954).toPrecision(2))//0.00095
console.log(Number(20).toString(2))//10100
console.log(parseInt('10100',2));//20
// Math
console.log(Math.abs(-105));//105 modul yani musbat son qiladi
console.log(Math.floor(10.6));//10 kichik tomonga yaxlitlaydi
console.log(Math.ceil(10.1));//11 katta tomonga yaxlitlaydi
console.log(Math.trunc(10.785));//10 . ta dan keyinga barchasini olib tashaydi
console.log(Math.round(20.9865));//20 yaxlitlaydi
console.log(Math.random());//0 va 1 orasidagi tasodifiy son qaytaradi
console.log(Math.pow(2,5));//32 darajaga ko'taradi
console.log(Math.sqrt(9));//3 kvatrad ildizini oladi
console.log(Math.cbrt(27));//3 cub ildizini oladi
console.log(Math.sign(-9));//-1 sonni musbat manfiyligini tekshiradi mubat bo'lsa 1 manfiy bo'lsa -1 0 bo'lsa 0 qaytaradi