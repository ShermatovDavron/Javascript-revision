// masala
let ar = ['webbrain','academy']
let arStr = ar.join(' ')


let newArr = []
// arStr = "webbrain academy"
for(i=0; i<arStr.length; i++){
    if(arStr.indexOf(arStr[i])>=0 && arStr[i]!=' '){
        arStr.substring(i,i+1)
        if(newArr[arStr[i]]){
            newArr[arStr[i]]=newArr[arStr[i]]+1
        }else{
            newArr[arStr[i]]=1
        }
    }
}
console.log(newArr);

