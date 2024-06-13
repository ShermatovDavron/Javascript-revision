// Advanced Array
// find and findIndex

let num= [1,5,9,6,4,3,5,6]

console.log(num.find((element)=>element>5));//9  qiymatini qaytaradi
console.log(num.findIndex((element)=>element>5));//2 indekisini qaytaradi

// find bilan filter farqi find bitta qiymat qaytaradi filter esa shartni bajaruvchi barcha qiymatlarni qaytaradi
console.log(num.sort((a,b)=>a-b)); // string malumot turini sort qilayotganimizda localeCompare dan foydalanamiz
// sort bilan filter farqi sort arrrayni tartiblab beradi 
console.log(num.filter((val,idx)=>val>3 && idx>4));
// map va forEach farqi  map orqali return qilsa bo'ladi forEach esa faqat amal bajarishi mumkin
console.log(num.forEach((val,idx)=>val*idx));
console.log(num.map((val,idx)=>val*idx));
// every  some fill -> every hammasa qanoatlantirsa tru qaytaradi some bittasi qanoatlantirsa true qaytaradi fill esa almashtiradi
console.log(num.some((val)=>val>5));
// Array.from massivni split qilish va uni ustida amal bajarish mumkin
console.log(num.fill(5,1,6));
// reduce ikkita parametr qabul qiladi sum va current
console.log(num.reduce((sum,current)=>sum+current,2));