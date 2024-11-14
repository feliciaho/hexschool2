// async function fetchData(){
//     try{
//         const response = await axios.post("https://randomuser.me/api",{
//             name: john
//         })
//         console.log(response.data.results);
//     }
//     catch(err){
//         console.log(err.response)
//     }
// }
// fetchData();
axios.get("https://randomuser.me/api/")
    .then(res =>{
        console.log(res.data.results)
    }).catch(err =>{
        console.log(err.response)
    });
