function LoginInto(){
    var User = document.getElementById("USER").value;
    var Pass = document.getElementById("PASS").value;

    if (User == "Fabi" && Pass == "Fabi"){
        
        alert("GoodJob");
        location.href="main.html";

    }
    else{

        alert(Pass);

       
    }

    
    
}