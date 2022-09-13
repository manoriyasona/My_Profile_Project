// var userfname = localStorage.getItem("fname");


// document.write(localStorage.getItem("fname"));

// document.getElementById("f1").innerHTML = document.write(localStorage.getItem("fname"));


// document.getElementById("f2").innerText = document.write(localStorage.getItem("lname"));


// document.getElementById("f3").innerText = document.write(localStorage.getItem("email"));


// document.getElementById("f4").innerText = document.write(localStorage.getItem("password"));


// document.getElementById("f5").innerText = document.write(localStorage.getItem("confirmpassword"));

// function SaveData(){
//     let name,lname,email,psw;
//     name = document.getElementById("f1").value;
//     lname = document.getElementById('f2').value;
//     email=document.getElementById('f3').value;
//     psw=document.getElementById('f4').value;

//     let user_records = new Array();
//     user_records=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];
//     if(user_records.some((v) => {return v.email==email}))
//     {
//         alert("duplicate data");
//     }
//     else{
//         user_records.push({
//             "fname":name,
//             "lname":lname,
//             "email":email,
//             "password":psw;
//         })
//         localStorage.setItem("users", JSON.stringify(user_records));
//     }

// }


// function loginUser() {
//     let email = document.getElementById("login-email").value;
//     let psw = document.getElementById("login-pass").value;

//     let user_records = new Array();

//     user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
//     for (x = 0; x <= user_records.length; x++)  
//     {  document.getElementById("f1").innerHTML = document.write(localStorage.getItem("fname"));
       
//     }
//     if (flag == false)
//     {
//         alert("login failed");
//     }
    
   
// }

window.onload = function() {
    document.getElementById('f1').innerText = localStorage.getItem('fname');
    document.getElementById('f2').innerText = localStorage.getItem('lname');
    document.getElementById('f3').innerText = localStorage.getItem('email');
    document.getElementById('f4').innerText = localStorage.getItem('password');

};


function Logout() {

    localStorage.removeItem("email");
    localStorage.removeItem("password");


    window.location.href = "login.html";

}


// let user_records = new Array();

// user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
// for (x = 0; x <= user_records.length; x++) {
//     debugger
//     if (user_records[x]['email'] == email && user_records[x]['password'] == psw) {
//         window.location.href = "landingPage.html";
//         var flag = true
//     }
// }
// if (flag == false) {
//     alert("login failed");
// }

function loginUser() {
    let email = document.getElementById("login-email").value;
    let psw = document.getElementById("login-pass").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    if (user_records.some((v) => { return v.email == email })) {

        alert("Login pass");

        let current_user = user_records.filter((v) => { return v.email == email && v.psw == psw })[0];
        localStorage.setItem('first name', current_user.fname);
        localStorage.setItem('last name', current_user.lname);
        localStorage.setItem('email', current_user.email);

    }
    else {
        alert("login fail");

    }



    // Storing Data in local storage

    localStorage.setItem("users", JSON.stringify(user_records));

}



