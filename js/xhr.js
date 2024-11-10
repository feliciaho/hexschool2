var xhr = new XMLHttpRequest();
// true 非同步 不會等資料回傳會繼續往下執行
// 但也不能用false 因為會等資料回傳才會往下執行 在大型專案中會造成效能問題
xhr.open("get", "https://hexschool.github.io/ajaxHomework/data.json",true);

xhr.send(null);
console.log(xhr.responseText);
xhr.onload =function(){
    console.log(xhr.responseText);
    var str = JSON.parse(xhr.responseText);
    document.querySelector(".message").innerHTML = str[0].name;
}