// 1 masala
let num = '123456'
let sum = 0
for(i of [...num]){
    sum+=+i
}
console.log( sum);
//  2 masala

function findZeros(num){
    let binary = Number(num).toString(2)
    console.log(binary)
    let numZero = 0
    let zero =0
    for(let i of [...binary]){
        if(i==1 && zero<numZero){
            zero = numZero
        }
        if(i==1 && numZero>0){
            numZero=0
        } 
        if(i!=1){
            numZero++ 
        }
    }
    console.log(zero)
}
// 1001
findZeros(8)
// abs
const Mat = {
    abs(num){
        if(num>=0){
            return num
        }else{
            return num*(-1)
        }
    },
}

