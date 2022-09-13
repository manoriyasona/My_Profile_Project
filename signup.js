function Validate() {

    // Retrieving Data

    var fname = document.getElementById("username").value;

    var lname = document.getElementById("lastname").value;

    var email = document.getElementById("email").value;

    var password = document.getElementById("password").value;

    var confirmpassword = document.getElementById("confirmpassword").value;


    // User name  validation
    if(fname == ""){
        document.getElementById("u1").innerHTML = "* Atleast one character in the field";
        return false;
    }
    if((fname.length <= 2) || ( fname.length >= 20)){
        document.getElementById("u1").innerHTML = "* Username between 2 and 20";
        return false;
    }
    if(!isNaN(fname)){
        document.getElementById("u1").innerHTML = "* Only characters are allowed";
        return false;
    }
     
    // Email Validation
    if(email == ""){
        document.getElementById("e1").innerHTML = "* Please fill the email field";
        return false;
    }
   
    if(email.indexOf('@') <= 0){
        document.getElementById("e1").innerHTML = "* Please enter the valid email";
        return false;
    }

    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById("e1").innerHTML = "* Please enter the valid email";
        return false;
    }

    if(``){
        document.getElementById("e1").innerHTML = 'Email is already registered ';
        return false;
    }
    


    // Password Validation

    if(password == ""){
        document.getElementById("p1").innerHTML = "* Please fill the password";
        return false;
    }

    if((password.length <= 5)||( password.length >= 20)){
        document.getElementById("p1").innerHTML = "* Password must be atleast of 5 digits";
        return false;
    }

    // Confirm password validation

    if(confirmpassword == ""){
        document.getElementById("p2").innerHTML = "* Please confirm the password";
        return false;
    }

    if(password != confirmpassword){
        document.getElementById("p2").innerHTML = "* Password is not matching";
        return false;
    }
    alert(fname + " Signup successfully");

    // Creating the array of objects

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
    if(user_records.some((v) => {return v.email == email }))
    {
        alert("Email is already registerd");

    }
    else{

        window.location.href = "login.html";
        
        user_records.push({
            "fname":fname,
            "lname":lname,
            "email":email,
            "password":password,
            "confirmpassword":confirmpassword
      
          })
      
      
          
          // Storing Data in local storage
       
          localStorage.setItem("users", JSON.stringify(user_records));

    }



    // var userfname = localStorage.setItem("fname", fname);

    // var userlname = localStorage.setItem("lname", lname)

    // var emails = localStorage.setItem("email", email);

    // var pass = localStorage.setItem("password", password);

    // var cpass = localStorage.setItem("confirmpassword", confirmpassword);
}



   
    // var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    //  if(regx.text(email)){
    //     alert("You entered a valid email ");
    //     return true;
    //  }
    //  else{
    //     alert("Please enter a valid email");
    //     return false;
    //  }


    // alert(fname + " Signup successfully");

    // Storing Data in local storage

    // var userfname = localStorage.setItem("fname", fname);

    // var userlname = localStorage.setItem("lname", lname)

    // var emails = localStorage.setItem("email", email);

    // var pass = localStorage.setItem("password", password);

    // var cpass = localStorage.setItem("confirmpassword", confirmpassword);


// Retrieving stored data from the local storage

// function Check() {
//     // var userfname = localStorage.getItem("fname", fname);

//     // var userlname = localStorage.getItem("lname", lname)

//     var emails = localStorage.getItem("email", email);

//     var pass = localStorage.getItem("password", password);

//     // var cpass = localStorage.getItem("confirmpassword", confirmpassword);

//     if (email == emails && password == pass) {
//         alert("login successfully");
//     }
//     else {
//         alert("Please fill correct details");
//     }

// }