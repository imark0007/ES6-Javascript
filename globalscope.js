function MyFunction(){

   var name="ECMAScript"; // this is local scope so its gonna be error
    
}
   console.log(name);         //when locally using

function MyFunction(){

    var name="ECMAScript";
    
    console.log(name);

}     //MyFunction(); //now it will run
 

// now global scope both case it will run

var name= "ECMAScript";
function MyFunction(){
}

console.log(name);
MyFunction();  // now it will run


var name= "ECMAScript";
function MyFunction(){
    console.log(name);

}
MyFunction(); // it will run