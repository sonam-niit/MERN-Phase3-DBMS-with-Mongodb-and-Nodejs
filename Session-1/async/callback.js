function display(x){
    console.log("Result "+x);
}

function add(num1,num2, callback){
    let res= num1+num2;
    callback(res);
}

add(4,5,display);

// function calculator(fun){
//     fun(add(3,4));
// }

// calculator(display)