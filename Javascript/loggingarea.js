
function siqnuprender(){

    document.getElementById("logincred").classList.remove("loggingarea_login")
    document.getElementById("logincred").classList.add("loggingarea_siqnup")
document.querySelector(".logincredintals").innerHTML=`
<input class="firstname input" type="text" placeholder=" First name">
<input class="lastname input" type="text" placeholder=" Last name">

<input class="email input" type="email" placeholder="Email">
<input class="password input" type="password" placeholder="Password">
<input class="repeatpassword input" type="password" placeholder=" Repeat password">
`


}

function loginrender(){
    document.getElementById("logincred").classList.remove("loggingarea_siqnup")
    document.getElementById("logincred").classList.add("loggingarea_login")

    document.querySelector(".logincredintals").innerHTML=`
     
    
    <input class="email input" type="email" placeholder="Email">
    <input class="password input" type="password" placeholder="Password">
   
    `
    
}


function Authenticatelogin(email,password){
for(let i=0; i<arrayOfUsers.length ;i++){
if (arrayOfUsers[i].email===email.value && arrayOfUsers[i].password===password.value) { 
   return true;
 }
}
return false;
  
}

function emailIsValidlogin(email){
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  return email.value.match(emailRegex);
}

function emailIsValid(email){
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
if(!email.value.match(emailRegex)){
  email.placeholder="Invalid email"
  return false;
}

else{

let isNotduplicate= true;
for(let i=0; i<arrayOfUsers.length; i++){

if(arrayOfUsers[i].email=== email.value){
  email.placeholder="Email is already used"
isNotduplicate = false;
break;
}

}


return isNotduplicate;


}


}



function passwordIsvalid(password){
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

return (password.value.match(passwordRegex));
}










arrayOfUsers= (localStorage.getItem("usersdata") === null) ? [] :  JSON.parse(localStorage.getItem("usersdata"));

let onsiqnup= false;
document.querySelector(".siqnupbut").addEventListener("click", ()=>{

    if(!onsiqnup){

        siqnuprender();
        onsiqnup=true;
    }
    else{

      let checkvaliddata=true;

    const firstname =  document.querySelector(".firstname");
    const lastname =  document.querySelector(".lastname");
    const email =  document.querySelector(".email");
    const password =  document.querySelector(".password");
    const repeatpassword =  document.querySelector(".repeatpassword");

   if(firstname.value===""){
    firstname.classList.add("checkinput")
    checkvaliddata=false;
   }
   else{

    firstname.classList.remove("checkinput")
   }

   
   if(lastname.value===""){
    lastname.classList.add("checkinput")
    checkvaliddata=false;
   }else{

    lastname.classList.remove("checkinput")
   }


   if(!emailIsValid(email)){
   
    email.value="";
    email.classList.add("emailcheck");
    checkvaliddata = false;
    } else{

     email.classList.remove("checkinput")
     }

     if(!passwordIsvalid(password)){
      password.value="";
      password.classList.add("checkinput")
      checkvaliddata = false;
      password.placeholder= "at least: 1(A-Z) 1(a-z) 1(1-9), minimum 8 characters"
     }
     else{
      email.classList.remove("checkinput")
     }

 if(password.value !== repeatpassword.value || repeatpassword.value==="" ){
  repeatpassword.value="";
      repeatpassword.classList.add("checkinput")
      checkvaliddata = false;
      repeatpassword.placeholder= "Password doesn not match";
     }
     else{
      repeatpassword.classList.remove("checkinput")
     }



    if(checkvaliddata){
      document.getElementById("overlayID").classList.add("overlay");
      arrayOfUsers.push({
          "email": email.value,
          "password": password.value,
          "First_name": firstname.value,
          "last_name": lastname.value,
          "pfp": "../imaegs/loggedoutpng.png"


      })
      localStorage.setItem("usersdata", JSON.stringify(arrayOfUsers));
     setTimeout(()=>{ 
      document.getElementById("overlayID").classList.remove("overlay");
      onsiqnup=false;
      loginrender();


    },800)
  }
    
    
    
    
        
     }




});








document.querySelector(".loginbut").addEventListener("click", ()=>{

  if(onsiqnup){
    loginrender();
    onsiqnup=false;
  }
  else{

    const email =  document.querySelector(".email");
    const password =  document.querySelector(".password");


    let validData= true;
    if(!emailIsValidlogin(email)){
      email.value="";
      email.classList.add("emailcheck");
      validData = false;
    }
    else{
      email.classList.remove("emailcheck");
    }

    if(validData && Authenticatelogin(email,password)){
      document.getElementById("overlayID").classList.add("overlay");

      setTimeout(()=>{ 
        document.getElementById("overlayID").classList.remove("overlay");
         window.location.href="/index.html";
        
  
  
      },800);
     


    }



}
    
    
    
    
    });