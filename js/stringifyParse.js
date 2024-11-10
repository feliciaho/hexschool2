// 從localStorage中setItem會抓到string
// 所以要轉成array
// 但轉成array也是不能直接使用的array
// 真正可以用的array要用json.Parse()


// 從localStorage中getItem會抓到string
// 所以要轉成array
// json.Parse()




let country =[
    {name:"felicia",
     place:"china"
    }
]
let str = JSON.stringify(country)
localStorage.setItem("country",str)
console.log(str)

let str2 = localStorage.getItem("country")
let country2 =JSON.parse(str2)
console.log(country2)
console.log(country2[0].name)
