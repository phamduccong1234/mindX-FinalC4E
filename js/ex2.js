let inputWeight = [60, 40, 55, 75, 64]
let firstList = []
let secondList = []

for(let i in inputWeight){
    if(i%2 == 0) firstList.push(inputWeight[i]);
    else secondList.push(inputWeight[i])
}
const sumMember=(num)=>{
    let sum = 0;
    for(let i in num){
        sum+=num[i]
    }
    return sum;
}

const firstResult = sumMember(firstList);
const secondResult = sumMember(secondList);

let finalResult = [firstResult, secondResult];
console.log(firstResult, secondResult);