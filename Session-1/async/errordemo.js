class MyError extends Error{
    constructor(args){
        super(args);
        this.name='My Custom Error'
    }
}

console.log(new Error("Throwing standard Error"));
console.log(new MyError('Error Occured'))