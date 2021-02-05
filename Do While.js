// var i = 1;
// do {
//     document.write(" " + i);
//     i++;
//     while (i <= 10);
// }


// jQurey 

$("button").on("click",function(){
    var value =this.innerHTML;
    $("h1").text(value + " is clicked")
})


$("login").click(function(){

var password1= $("#pass1").val();
var password2 =$("#pass2").val();

if( password1 != ""  && password2 != ""){

    if(password1 == password2){
        alert("login successful")


        else{
            alert("login denied")
        }
    }



    else{
        alert("enter your psaaword")
    }


}


