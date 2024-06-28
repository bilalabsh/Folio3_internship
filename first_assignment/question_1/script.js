function createCounter(){
    let counter=0;

    return{
        increment:function(){
            counter++;
            return counter
        },
        getValue:function(){
            return counter;
        }
    }
}

//handles user input as well, was not necessary but felt like playing with js a bit :D
// function main(){
//     const myCounter=createCounter();

//     function handle_user_input(){
//         let contine=true;
//         while(contine){
//             const choice=prompt("Enter 1 to increment the counter or 2 to get the counter value or x to exit the program");
//             if (choice==='1'){
//                 myCounter.increment();
//                 console.log("Increment successful!");

//             }else if(choice==='2'){
//                     console.log("Current counter value is: "+myCounter.getValue());

//                 }
//                 else{
//                     console.log("Invalid input");
//                 }
//             const continue_choice=prompt("Do you want to continue? Enter y for yes and n for no");   
//             if (continue_choice!=='y'){
//                 contine=false;
//                 alert("Existing program!")
//             } 
//         }
        
            
//     }
//     handle_user_input();
// }
// main()

const answer=createCounter();
answer.increment();
answer.getValue();
console.log(answer.increment());
answer.increment();
answer.getValue();