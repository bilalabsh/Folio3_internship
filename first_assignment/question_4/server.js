function logObjectProperties(obj){
    for (let i=1;i<=10;i++){
        console.log(i);
    }

    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
      }
}

const bills={
    name:"Bilal",
    age:21
}

logObjectProperties(bills);