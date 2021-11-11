function product(value1, value2){
    return value1*value2;
}

function square(side1){
    return product(side1,side1);
}

function printResult(side1){
    var result= square(side1);

    //display function added in callback queue, after 0 sec It will execute.
    setTimeout(()=>display(result),0);
    
}

function display(res){
    console.log(res);
}

printResult(6);