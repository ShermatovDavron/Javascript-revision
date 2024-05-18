//Object- Objectni ikki xis usulda xosil qilish mumkin 1-{} jingalak qavs yordamida 2-new Object() yordamida
// Object-> Bir nechta malumotlarni keylari bilan o'zida jamlagan qutiga aytiladi

const Obj = {
    //key    : value
    lastname : "Davron"
}
// Quyidagi usulda keyslar dinamik usulada berilgan yani objectdan tashqaridagi title obj ichiga [title] yordamida dinamik key berilyabdi

let title = "name"
let obj = {
    name:'Webbrain',
    title:"IT Center",
    [title]:'Webbrain academy',
    title
}

console.log(obj[title]);//Webbrain Academy
console.log(obj.title);//name
console.log(obj.name);//Webbrain Academy
// Copying vs Referencing
// Reference-> Object Non Primitive bo'lgani uchun unga faqat link beriladi qiymatlari boshqa joyda saqlanadi reference esa ikkinchi o'zgaruvchiga ham xuddi shu linkni berib qo'yadi
const about = {
    name:'Davron',
    age:21
}

const newAbout = about

newAbout.name = 'Abduvohid'
console.log(about);
console.log(newAbout);
// Copying->Objectni nusxasini ko'chirib beradi va yangi object ikkinchisiga aloqador bo'lmaydi
const copyAbout = structuredClone(about)//structuredClone node.js ni 17 dan yuqorida ishlaydi
copyAbout.name = 'Alisher'
console.log(about);
console.log(copyAbout);

// Object assign -> Bu birnechta objectlarni moslashtirishga aytiladi yani asosiy objectni qiymatlarini yangilashga aytiladi havola linki o'zgarmaydi

let school = {
    name:"Super school",
    age:4,
    major:['matematika','fizika'],
}

let newSchool = {
    age:5,
    major:['fizika','kimyo','biologiya']
}



Object.assign(school,newSchool)

console.log(school);
console.log(newSchool);
// Object.assign() vs structuredClone()->Object.assign() ikki yoki undan ko'p massivlarni malumotlarini umumiylashtiradi structuredClone() ayni bir masivni nusxasini olib beradi
// masala
let empty = {name:'Davron'}

let  isEmpty = (obj)=>{
        if(Object.keys(obj).length>0){
            return false
        }else{
            return true
        }
}

console.log(isEmpty(empty));
//masala
let salaries = {
    John:100,
    Ann:160,
    Pete:130
}
const sortable = Object.entries(salaries)
    .sort(([,a],[,b]) => a-b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

console.log(sortable);
// masala 
let menu = {
    width:200,
    height:300,
    title:"My menu"
}

for(let key in menu){
    if(!isNaN(menu[key])){
        menu[key]*=2
    }
}
console.log(menu);

