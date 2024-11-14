// function calculate(max){
//     let result = 0;
//     for(let i=0; i<=max ;i++){
//         result += i
//     }
//     return result
// }
// let ans1 = calculate(10)
// let ans2 = calculate(20)
// console.log(ans1, ans2);

// 箭頭函式用法1


let calculate = (max)=>{
    let result = 0;
    for(let i=0; i<=max ;i++){
        result += i
    }
    return result
}
let ans1 = calculate(10)
let ans2 = calculate(20)
console.log(ans1, ans2);

// 箭頭函式用法2
// 注意這種更簡寫的方法只能裡面有return 其他都不行有
// let multiply = (n1,n2)=>{
//     return n1*n2
// }
let multiply = (n1,n2) =>(n1*n2)
console.log (multiply(2, 3))
