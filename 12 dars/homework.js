let user =[
    {id:1,year:1998,engine:1,name:"Tico"},
    {id:2,year:2005,engine:1.2,name:"Matiz"},
    {id:3,year:2010,engine:1.6,name:"Gentra"},
    {id:4,year:2010,engine:1.5,name:"Cobalt"},
    {id:5,year:2012,engine:2,name:"Malibu"},
    {id:6,year:2000,engine:1.2,name:"Damas"},
    {id:7,year:2018,engine:2.4,name:"Tracker"},
];

// CRUD
// Delete

DeleteById = (id)=>{
    let res = user.filter((value)=>value.id!=id)
    user=res
}
DeleteById(6)
console.log(user);

//Uptade

// UpdateById = (data)=>{
//     let res = user.map((value)=>{
//         if(value.id==3){
//             value = {...value, ...data}
//             return value
//         }else{
//             return value
//         }
//     })
//    user=res
// }

// UpdateById({year:2012,engine:1.8,name:"Lasetti"})
// console.log(user);

//Read

// ReadById = (id)=>{
//     let res = user.filter((value)=>value.id==id)
//     console.log(res)
// }

// ReadById(5)

// Create 

// CreateData = (data)=>{
//     let res = [...user,{id:user.length+1,...data}]
//     user=res
//     return res
// }
// CreateData({year:2024, engine:1.5, name:"Monza"})
// console.log(user)


