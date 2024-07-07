// 從localStorage中setItem會抓到string
// 所以要轉成array
// jsno.stringfyParse()

// 從localStorage中getItem會抓到string
// 所以要轉成array
// jsno.Parse()




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
