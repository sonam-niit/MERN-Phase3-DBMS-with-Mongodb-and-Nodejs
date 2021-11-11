 function bar(){
     console.log('Bar called');
 }

 function baz(){
     console.log("Baz called")
 }

 function foo(){
     console.log('foo called');
     setTimeout(bar,0);
     //setTimeout(baz,0);
     baz();
 }

 foo();