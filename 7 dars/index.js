// Call stack and Heap   -> Stack mahalliy o'zgaruvchilarni saqlash uchun ishlatiladi, heap esa dinamik xotirani ajratish uchun ishlatiladi  va qo'lda boshqarishni talab etadi
// this methodi -> o'zidan katta parent scopiga ishora qiladi va undagi qiymatlarni o'zlashtirish uchun xizmat qiladi
const object = {
    name:"Davron",
    sayHi(num){
        console.log(`Assalomu alaykum ${this.name}, sizni bahongiz ${num}`);
    }
} 

object.sayHi(5)
// Function constructor -> Bu bizga yangi object yaratishimizga yordam beradi bundan oldin biz buni classlar yordamida bajarganmiz

function getCar(name){
    this.name = name
    this.sayHi= function(){
        console.log(`${this.name} 1` )
    }
}

let newObj = new getCar("Malibu")
// Symbollarni ham key sifatida ishlatishimiz mumkin
const a = Symbol('id')
const obj = {
    [a]:"Davron",
    a:"Mavlon",
    'a':"Xurshid"
}
console.log(obj.a);//Xurshid
console.log(obj[a]);//Davron
console.log(obj['a']);//Xurshid

// Distructure -> Object ichidagil;arni aloxida o'zgaruvchilarga olib chiqish
let isAirBag = true
const Car = {
    name:"Lasetti",
    year:2012,
    isAirBag,
    "Mator":1.8,
    ["karobka"]:"Avtomatic"
}
let {name:carName,year,isAirBag:lasettiAirbag,Mator,karobka}=Car
console.log(carName,year,lasettiAirbag,Mator,karobka)
// Spread operatori -> ... spread operatori objectdan nusxa kochirish yoki tahrirlash uchun ishlatiladi

console.log({...Car,name:'gentra'})
