let obj3 = {
    obj1 : 20,
    fn : function(){
        console.log(this.obj1)
    },
    // 可以縮寫
    fn2(){
        console.log(this.obj1 + this.obj1)
    }
}
obj3.fn();
obj3.fn2();


// ... 用法一
let groupA =["22", "33"];
let groupB =['11', '99'];
// ...相加兩個陣列
let res = [...groupA, ...groupB]
console.log(res)

// ...用法二 從類陣列轉成純陣列
let res2 = document.querySelectorAll('li')
console.log(res2) 
let newRes2 =[...res2]
console.log(newRes2)