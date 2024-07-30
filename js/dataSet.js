document.querySelector(".dog").addEventListener("click",function(e){
    let dog = e.target.dataset.dog;
    let cat = e.target.dataset.cat;
    console.log(dog);
    console.log(cat);
})