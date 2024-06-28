function shallowClone(obj){
    return{...obj};
}

const bills={
    name:"Bilal",
    age:"21",
    full_name:{
        first_name:"Bilal",
        last_name:"Abdul"
    }
}

const cloned_obj=shallowClone(bills);
console.log(bills);
console.log("cloned",cloned_obj);

cloned_obj.first_name="Bilal Abdul";
console.log("Oringinal",bills);
console.log("cloned",cloned_obj);
/*
shallow copy so original object is unchanged
*/
