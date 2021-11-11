function do1Thing(){
    do2thing();
}

function do2thing(){
    throw new Error("Error");
}

function init(){
    try{
        do1Thing();
    }
    catch(e){
        console.log(e);
    }
}

init();