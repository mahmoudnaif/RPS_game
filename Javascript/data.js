export let arrayOfUsers= (localStorage.getItem("usersdata") === null) ? [] :  JSON.parse(localStorage.getItem("usersdata"));
export let currentUser= (localStorage.getItem("currentUser") === null)? {logged: false} : JSON.parse(localStorage.getItem('currentUser'));

export function EditData(edit_value, typeofedit){
   let editSuccess= false;
switch (typeofedit){
case "change_Email": {
 if(emailIsValid(edit_value)){

       for(let i=0; i < arrayOfUsers.length; i++){
        if(currentUser.email=== arrayOfUsers[i].email){
            arrayOfUsers[i].email= edit_value;
            currentUser.email= edit_value;
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            localStorage.setItem("usersdata", JSON.stringify(arrayOfUsers));
            editSuccess= true;
            break;

        }
        
       }


}

}
break;
case  "change_UserName":{

    if(Usernamevalid(edit_value)){

        for(let i=0; i < arrayOfUsers.length; i++){
         if(currentUser.email=== arrayOfUsers[i].email){
             arrayOfUsers[i].username= edit_value;
             currentUser.username= edit_value;
             localStorage.setItem("currentUser", JSON.stringify(currentUser));
             localStorage.setItem("usersdata", JSON.stringify(arrayOfUsers));
             editSuccess= true;
             break;
 
         }
         
        }
 
 
 }

}
break;

case "change_FirstName":{

    if(edit_value!=""){

    for(let i=0; i < arrayOfUsers.length; i++){
        if(currentUser.email=== arrayOfUsers[i].email){
            arrayOfUsers[i].First_name= edit_value;
            currentUser.First_name= edit_value;
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            localStorage.setItem("usersdata", JSON.stringify(arrayOfUsers));
            editSuccess= true;
            break;

        }
        
       }
    }
}

break;
case "change_LastName":{
    if(edit_value!=""){

    for(let i=0; i < arrayOfUsers.length; i++){
        if(currentUser.email=== arrayOfUsers[i].email){
            arrayOfUsers[i].last_name= edit_value;
            currentUser.last_name= edit_value;
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            localStorage.setItem("usersdata", JSON.stringify(arrayOfUsers));
            editSuccess= true;
            break;

        }
        
       }

    }
}



}
return editSuccess;

}


export function editpicture(newpfp){

    for(let i=0; i < arrayOfUsers.length; i++){
        if(currentUser.email=== arrayOfUsers[i].email){
            arrayOfUsers[i].pfp= newpfp;
            currentUser.pfp= newpfp;
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            localStorage.setItem("usersdata", JSON.stringify(arrayOfUsers));
            break;

        }
        
       }
}


  
  function emailIsValid(email){
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
  if(!email.match(emailRegex)){
    return false;
  }
  
  else{
  
  let isNotduplicate= true;
  for(let i=0; i<arrayOfUsers.length; i++){
  
  if(arrayOfUsers[i].email.toUpperCase()=== email.toUpperCase()){
    
  isNotduplicate = false;
  break;
  }
  
  }
  
  
  return isNotduplicate;
  
  
  }
}


function Usernamevalid(username){
  const userRegex= /^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/;

  if(!username.match(userRegex)){

    return false;
  }
  
  else{
  
  let isNotduplicate= true;
  for(let i=0; i<arrayOfUsers.length; i++){
   

  if(arrayOfUsers[i].username.toUpperCase()=== username.toUpperCase()){
  isNotduplicate = false;
  break;
  }
  
  }
  
  
  return isNotduplicate;
  
  
  }
  
}


export function passwordregex(password){
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    return (password.match(passwordRegex));

}

export function changepassword(password, repeatpass){
  let success= false;
if(passwordregex(password)  && password===repeatpass){
  success=true;
  for(let i=0; i < arrayOfUsers.length; i++){
    if(currentUser.email=== arrayOfUsers[i].email){
        arrayOfUsers[i].password= password;
        currentUser.password= password;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        localStorage.setItem("usersdata", JSON.stringify(arrayOfUsers));
        break;

    }
    
   }

}

return success;

}


/*Adress functions*/
export function EditAdress(Countryselector, governorate, Street_Name, home_address, pistol_Code ){
let editSuccess= false;

if(Countryselector.value!="" && governorate.value!="" && Street_Name.value!="" && home_address.value!="" && !isNaN(pistol_Code.value)){

  for(let i=0; i < arrayOfUsers.length; i++){

    if(currentUser.email=== arrayOfUsers[i].email){

        arrayOfUsers[i].billingAdress= {
            "Countryselector": Countryselector.value,
            "countryIndex": Countryselector.selectedIndex,
            "governorate": governorate.value,
            "Street_Name": Street_Name.value,
            "home_address": home_address.value,
            "pistol_Code": pistol_Code.value  



        };
        currentUser.billingAdress= {
          "Countryselector": Countryselector.value,
          "countryIndex": Countryselector.selectedIndex,
          "governorate": governorate.value,
          "Street_Name": Street_Name.value,
          "home_address": home_address.value,
          "pistol_Code": pistol_Code.value  



      };
    
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        localStorage.setItem("usersdata", JSON.stringify(arrayOfUsers));
        break;

    }
    
   }
   editSuccess= true;
}

return editSuccess;




}
