let country = [
    {
        farmer: "david"
    },
    {
        farmer:"andy"
    }
]

// 更新農場資料
let list = document.querySelector(".list");
function updateList(){
    let str= "";
    for(i = 0 ; country.length > i ;i++){
        str+= "<li data-num="+ [i] +">" + country[i].farmer + "</li>"
    };
    list.innerHTML = str;
}
updateList();

// 確認點擊的資料
list.addEventListener("click",function(e){
    let num = e.target.dataset.num;
    alert("你現在選擇的農夫是"+ country[num].farmer)
    country.splice(num,1);
    updateList();
})




