// this 代表函式中的綁定物件,通常在函式中使用
// 不同的程式碼脈絡下,綁定的物件會不一樣

// 1.獨立情況
function test1() {
  console.log(this.innerHeight);
}
// this global 全域
test1();

// 2.物件的方法
let obj = {
  x: 3,
  test: function () {
    console.log(this.x);
  },
};
// this 會往外找代表obj整個物件
obj.test();

// 3.事件處理函式
document.addEventListener("click", function () {
  console.log(this);
});
// 觸發事件的物件


// 4.建構函式
function point (){
    console.log(this);
    // this 在這裡代表瀏覽器會幫我們建好一個空白物件
    this.x = 3;
    this.y = 4;
}
// 要加new 才會新建構一個空物件
let pointNam = new point();
console.log(pointNam);
