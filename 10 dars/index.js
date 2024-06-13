// Array
//  Array - Object turining maxsus ko'rinishi bo'lib [] qavs bilan yaratiladi 
// Array declaration array elementlarini tartib bilan nomlaydi 
// slice bilan splice farqi slice massivni o'z xolicha qoldiradi splice massivni o'zgartiradi
let arr1 = [1,2,3,4,5,6,7]
let arr2 = [1,2,3,4,5,6,7]

console.log(arr1.splice(0,4,5))//1,2,3,4
console.log(arr2.slice(2,5))//3,4,5

console.log(arr1)//5,5,6,7
console.log(arr2)//1/2/3/4/5/6


