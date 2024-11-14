const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  people.forEach((item, index)=>{
    item.age +=1
    console.log(item.age)
    console.log(index)
  })
  