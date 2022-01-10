

// function myFirstFunction(input) {
//     console.log(input);
// }

// function addTwo (input) {
//     return input + 2;
// }

// function multipleParams (input1, input2) {
//     return input1 + input2;
// }

// myFirstFunction("Hello world")
// myFirstFunction(addTwo(addTwo(3)))


// let form = document.getElementById('subscribe');  

function submitForm(){ 
    var name=document.getElementById("name").value;
    var he=document.getElementById("he").value;
    var him=document.getElementById("him").value;
    var his=document.getElementById("his").value;
    var adj1=document.getElementById("adj1").value;
    var adj2=document.getElementById("adj2").value;
    var adj3=document.getElementById("adj3").value;
    var v1=document.getElementById("v1").value;
    var v2=document.getElementById("v2").value; 
    var v3=document.getElementById("v3").value; 
    var n1=document.getElementById("n1").value;
    var n2=document.getElementById("n2").value;
    var n3=document.getElementById("n3").value;
    alert([name] + " is so " + [adj1] + "!  I think " + [he] + " is " 
    + [adj2] + " because " + [he] + " " + [v1] + " my " + [n1] + ".  " + [his] + " "
    + [n2] + " is so " + [adj3] + "!");  
    }