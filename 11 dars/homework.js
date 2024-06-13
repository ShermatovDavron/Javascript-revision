let user =[
    {id:1,year:1998,engine:1,name:"Tico"},
    {id:2,year:2005,engine:1.2,name:"Matiz"},
    {id:3,year:2010,engine:1.6,name:"Gentra"},
    {id:4,year:2010,engine:1.5,name:"Cobalt"},
    {id:5,year:2012,engine:2,name:"Malibu"},
    {id:6,year:2000,engine:1.2,name:"Damas"},
    {id:7,year:2018,engine:2.4,name:"Tracker"},
];

console.log(user.filter((val)=>val.year>2010));
console.log(user.filter((val)=>val.year<2010));
console.log(user.filter((val)=>val.year===2010));

console.log(user.sort((a,b)=>a.engine-b.engine));
console.log(user.sort((a,b)=>a.year-b.year));
// console.log(user.sort((a,b)=>a.localeCompare(b)));


console.log(user.filter((val)=>val.year<2000).map((val)=>Object.assign(val,{status:'Eski'})));
console.log(user.filter((val)=>val.year<=2010 && val.year>2000).map((val)=>Object.assign(val,{status:"O'rta"})));
console.log(user.filter((val)=>val.year>2010).map((val)=>Object.assign(val,{status:'yangi'})));

let array = [5,[5,6,8],8,6,[6,[9,6],[99,[77,[5],6],7]]]

console.log(array.flat(inf));