// 1 masala 
let user = {
    name:"Webbrain",
    surname:"Academy",
    info:{
        name:"IT Center",
    },
};

let {name,surname,info:{name:about} } = user

console.log(name,surname,about)//Webbrain Academy IT Center
// 2 masala
let user1 = {
    name:"Webbrain",
    surname:"Academy",
    getName(){
        console.log(user1.name,user1.surname);
    }
}
user1.getName();
// bu code yaxshi code deyilmaydi chunki user1 yani object nomi o'zgarsa error beradi shuni uchun this dan foydalanganimiz yaxshi
let user2 = {
    name:"Webbrain",
    surname:"Academy",
    getName(){
        console.log(this.name,this.surname);
    }
}
user2.getName();
