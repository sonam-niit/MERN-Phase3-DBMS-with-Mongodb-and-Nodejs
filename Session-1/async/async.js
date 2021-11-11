
function print(){
    console.log("print function called");
}
function add(a,b){
    console.log("Addition "+(a+b))
}
function asyncDemo(){
    console.log("async function called")
    for(var count=0;count<10;count++){
        //executes after 2 seconds
        setTimeout(()=>{console.log(count);}, 2000)
       
    }
    console.log("async task completed");
}
asyncDemo();
print();
add(2,3);