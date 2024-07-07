
document.querySelector(".buttonClass").addEventListener("click",function(e){
    let str= document.querySelector('.textClass').value;
    localStorage.setItem("name",str);
})
document.querySelector(".buttonClass2").addEventListener("click",function(e){
    let str2 = localStorage.getItem("name");
    console.log(str2);
})