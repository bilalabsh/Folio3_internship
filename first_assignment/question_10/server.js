function deepCopy(obj){
    return JSON.parse(JSON.stringify(obj));
}

const original_bills={
    name:"Bilal",
    age:"21",
    full_name:{
        first_name:"Bilal",
        last_name:"Abdul"
    }
}

const cloned_bills=deepCopy(original_bills);
console.log(original_bills);
console.log("cloned",cloned_bills);

cloned_bills.full_name.first_name="Bilal Abdul";
console.log("Oringinal",original_bills);
console.log("cloned",cloned_bills);
