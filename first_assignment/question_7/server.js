class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log("Hello, my name is "+this.name+" and I am "+this.age);
    }
}
const bilal=new Person("Bilal",21);
bilal.greet();