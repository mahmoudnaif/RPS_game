import {currentUser, EditData, editpicture, passwordregex, changepassword, EditAdress} from "./data.js";


function LoadAccountInfo(){


    document.querySelector(".accountInfo").classList.add("activearea");
    document.querySelector(".security").classList.remove("activearea");
    document.querySelector(".billingInfo").classList.remove("activearea");
    document.getElementById("overlayID").classList.add("overlay");


    setTimeout(()=>{
        document.getElementById("overlayID").classList.remove("overlay");
        
    document.querySelector(".viewingarea").innerHTML=` 


    <div id="overlayID" >
        
    </div>
    
    
    <div class="First-section">

    <div class="profilePic">
          <div class="overlab">
              <label for="image-input"><p1>Change picture</p1></label>
          </div>
          <label for="image-input"><img class="myprofilepic" src=${currentUser.pfp}></label>
          
          <input id="image-input" type="file">
     </div>

     <div class="myname">

      <p1 class="abdoneasha" lang="ar" dir="rtl">
          عبدو نقاشة
       </p1>
  </div>



</div>

<div class="editPersonalInfo">
  
  <div class="containinput">
      <input class="FORBIDEDIT" id="change_Email">
      <span>Email address</span>
      <button class="editing_Buttons" data-ID="change_Email">
          <img src="images/editimg.png">
      </button>
  </div>


  <div class="containinput">
      <input class="FORBIDEDIT" id="change_UserName">
      <span>User name</span>
      <button class="editing_Buttons" data-ID="change_UserName">
          <img src="images/editimg.png">
      </button>
  </div>
  
  <div class="containinput">
      <input class="FORBIDEDIT" id="change_FirstName">
      <span>First name</span>
      <button class="editing_Buttons" data-ID="change_FirstName">
          <img src="images/editimg.png">
      </button>
  </div>


  <div class="containinput">
      <input class="FORBIDEDIT" id="change_LastName">
      <span>Last name</span>
      <button class="editing_Buttons" data-ID="change_LastName">
          <img src="images/editimg.png">
      </button>
  </div>
  


  

  
</div>`;
loadEventsforAccountInfo();
        
document.getElementById("change_Email").value= currentUser.email[0]+"********"+ currentUser.email.substring(currentUser.email.indexOf('@')-1) ;

document.getElementById("change_UserName").value= currentUser.username;
document.getElementById("change_FirstName").value= currentUser.First_name;
document.getElementById("change_LastName").value= currentUser.last_name;

},800)
    }


function loadsecurity(){

    document.querySelector(".accountInfo").classList.remove("activearea");
    document.querySelector(".security").classList.add("activearea");
    document.querySelector(".billingInfo").classList.remove("activearea");
    document.getElementById("overlayID").classList.add("overlay");

    setTimeout(()=>{
        document.getElementById("overlayID").classList.remove("overlay");

    document.querySelector(".viewingarea").innerHTML=`     
    <div id="overlayID" >
    
    </div>
    

      
  
       <div class="mylogo">
  
        <p1 class="abdoneasha" lang="ar" dir="rtl">
            عبدو نقاشة
         </p1>
    </div>
  
  
  

      

            <div class="containinput" >
                <input type="password" class="FORBIDEDIT" id="change_Password">
                <span class="password_Span">Password</span>
                <button class="passButton">
                    <img src="images/editimg.png">
                </button>
          </div>


          <div class="secureYourAccount">
            <h1>
                Secure your account:
            </h1>
            
                <li>Use a strong Password.</li>
                <li>Don't use the same password for all your accounts </li>
                <li>Don't share your personal info with anyone, speically on the internet.</li>
                <li>Update your browser to the latest version.</li>
                <li>Keep your info updated reguarly.</li>
                
                
              
          </div>
              `;
              loadEventsforSecurity();

},800);
}



function LoadBillingAdress(){
    document.querySelector(".accountInfo").classList.remove("activearea");
    document.querySelector(".security").classList.remove("activearea");
    document.querySelector(".billingInfo").classList.add("activearea");
    document.getElementById("overlayID").classList.add("overlay");

    setTimeout(()=>{
        document.getElementById("overlayID").classList.remove("overlay");

    document.querySelector(".viewingarea").innerHTML=`

    <div id="overlayID" >
    
    </div>
    

    <div class="editAddress">
  
    <div class="containinput">
        <select class="select_Country FORBIDEDIT adressinputs">
            <option value="" disabled selected hidden>None</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">Central African Republic</option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote D'ivoire">Cote D'ivoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">French Southern Territories</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
            <option value="Guam">Guam</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guernsey">Guernsey</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-bissau">Guinea-bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
            <option value="Honduras">Honduras</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Isle of Man">Isle of Man</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jersey">Jersey</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
            <option value="Korea, Republic of">Korea, Republic of</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Macao">Macao</option>
            <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Martinique">Martinique</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mayotte">Mayotte</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
            <option value="Moldova, Republic of">Moldova, Republic of</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar">Myanmar</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Netherlands Antilles">Netherlands Antilles</option>
            <option value="New Caledonia">New Caledonia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Niue">Niue</option>
            <option value="Norfolk Island">Norfolk Island</option>
            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Pitcairn">Pitcairn</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="Qatar">Qatar</option>
            <option value="Reunion">Reunion</option>
            <option value="Romania">Romania</option>
            <option value="Russian Federation">Russian Federation</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Helena">Saint Helena</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
            <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
            <option value="Swaziland">Swaziland</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            <option value="Taiwan">Taiwan</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-leste">Timor-leste</option>
            <option value="Togo">Togo</option>
            <option value="Tokelau">Tokelau</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="Virgin Islands, British">Virgin Islands, British</option>
            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
            <option value="Wallis and Futuna">Wallis and Futuna</option>
            <option value="Western Sahara">Western Sahara</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
        </select>
        <span>Country</span>
      
    </div>
  
  
    <div class="containinput ">
        <input class="FORBIDEDIT adressinputs" id="governorate">
        <span>governoratee</span>
    </div>
    
    <div class="containinput">
        <input class="FORBIDEDIT adressinputs" id="Street_Name">
        <span>Street name</span>
       
    </div>
  
  
    <div class="containinput">
        <input class="FORBIDEDIT adressinputs" id="home_address">
        <span>Building no</span>
    </div>

    <div class="containinput">
        <input class="FORBIDEDIT adressinputs" id="pistol_Code">
        <span>Pistol code</span>
    </div>
  
    <div class="address_ButtonDiv">
      <button class="editAddressbut"><p1>Edit address</p1></button>
    </div>
  
    
  
    
  </div>


    
    `;

     document.querySelector(".select_Country").selectedIndex= currentUser.billingAdress.countryIndex;
   document.getElementById("governorate").value= currentUser.billingAdress.governorate;
   document.getElementById("Street_Name").value= currentUser.billingAdress.Street_Name;
    document.getElementById("home_address").value= currentUser.billingAdress.home_address;
    document.getElementById("pistol_Code").value= currentUser.billingAdress.pistol_Code;



    loadEventsforBillingAdress();

},800)





}







if(!currentUser.login){
    document.body.innerHTML= `   <div class="warning">
    <p1>Please <a href="loggingin.html">log in</a> first</p1>

</div>
`


}else{
    document.querySelector(".viewingarea").style.height= "400px";

    LoadAccountInfo();
    setTimeout(( )=>{    document.querySelector(".viewingarea").style.height= "auto";},800)

}






document.querySelector(".accountInfo").addEventListener("click", () => {

    if(!document.querySelector(".accountInfo").classList.contains("activearea")){
        LoadAccountInfo();
    }
});



document.querySelector(".security").addEventListener("click", () => {

    if(!document.querySelector(".security").classList.contains("activearea")){
    
  
        loadsecurity();

    }

});

document.querySelector(".billingInfo").addEventListener("click", () => {
    if(!document.querySelector(".billingInfo").classList.contains("activearea")){
        LoadBillingAdress();
    }
});










/*Button click JS*/
function loadEventsforAccountInfo(){
let active_Editing=false;
let current_Editing="";


document.querySelectorAll(".editing_Buttons").forEach(button =>{

button.addEventListener("click", () =>{
    if(!active_Editing){
        active_Editing=true;
        current_Editing= button.getAttribute("data-ID");
        button.classList.add("activeediting");
        document.getElementById(button.getAttribute("data-ID")).value="";
        document.getElementById(button.getAttribute("data-ID")).classList.remove("FORBIDEDIT");
    }

    else if(current_Editing==button.getAttribute("data-ID")){
        
        if(EditData(document.getElementById(button.getAttribute("data-ID")).value,button.getAttribute("data-ID") )){

        document.getElementById("overlayID").classList.add("overlay");

        setTimeout(()=>{

            active_Editing=false;
            current_Editing="";
            button.classList.remove("activeediting");
            document.getElementById(button.getAttribute("data-ID")).classList.add("FORBIDEDIT");

            document.getElementById("change_Email").value= currentUser.email[0]+"********"+ currentUser.email.substring(currentUser.email.indexOf('@')-1) ;
            document.getElementById("change_UserName").value= currentUser.username;
            document.getElementById("change_FirstName").value= currentUser.First_name;
            document.getElementById("change_LastName").value= currentUser.last_name;

            active_Editing=false;
            current_Editing="";
            document.getElementById("overlayID").classList.remove("overlay");




        },800)
    }

    else{
          document.getElementById(button.getAttribute("data-ID")).classList.add("FORBIDEDIT");
             active_Editing=false;
            current_Editing="";
            button.classList.remove("activeediting");
            document.getElementById(button.getAttribute("data-ID")).classList.add("checkinput");

            document.getElementById("change_Email").value= currentUser.email[0]+"********"+ currentUser.email.substring(currentUser.email.indexOf('@')-1) ;
            document.getElementById("change_UserName").value= currentUser.username;
            document.getElementById("change_FirstName").value= currentUser.First_name;
            document.getElementById("change_LastName").value= currentUser.last_name;

            active_Editing=false;
            current_Editing="";
          

        setTimeout(()=>{
            document.getElementById(button.getAttribute("data-ID")).classList.remove("checkinput");
        },500)




    }


           
        }

    

    

    



});



});



/*Picture Change*/



function isFileImage(file) {
    return file && file['type'].split('/')[0] === 'image';
}

document.getElementById("image-input").addEventListener("change",() =>{
if(isFileImage(document.getElementById("image-input").files[0])){
    
const readimg = new FileReader();

readimg.readAsDataURL(document.getElementById("image-input").files[0]);
document.getElementById("overlayID").classList.add("overlay");
readimg.addEventListener("load",()=>{
    const imgurl= readimg.result;
    document.getElementById("overlayID").classList.remove("overlay");
    document.querySelector(".myprofilepic").src=imgurl;
    editpicture(imgurl);






});

}

else{
    




}
});

}



function loadEventsforSecurity(){

    document.getElementById("change_Password").value="************";

    let active_Editing=false;
    let enteredoldpass=false;
    document.querySelector(".passButton").addEventListener("click",()=>{
        if(!active_Editing){
            document.getElementById("change_Password").value="";
        active_Editing=true;
        document.querySelector(".passButton").classList.add("activeediting");
        document.querySelector(".password_Span").innerHTML=`Old password`;
        document.getElementById("change_Password").classList.remove("FORBIDEDIT");
        }
        else{
          
                if(document.getElementById("change_Password").value===currentUser.password){
                    enteredoldpass= true;

                    document.getElementById("overlayID").classList.add("overlay");
                    setTimeout(()=>{
                        document.getElementById("overlayID").classList.remove("overlay");
                        document.querySelector(".containinput").classList.add("passwordContainer");
                        document.querySelector(".passwordContainer").classList.remove("containinput");
                        
                        document.querySelector(".passwordContainer").innerHTML=` 
                        <input type="password" id="change_OldPassword" class="password">
                        <span>Password</span>
                        <input type="password" id="change_OldPasswordRepeat" class="repeat_Password">
                        <span>Reapeat Password</span>
                        <button class="newpassbut">
                            <img src="images/editimg.png">
                        </button>`;


                        document.querySelector(".newpassbut").classList.add("activeediting");

                        document.getElementById("change_OldPassword").addEventListener("change",()=>{

                                if(passwordregex(document.getElementById("change_OldPassword").value)){
                                    document.getElementById("change_OldPassword").classList.remove("checkinput");

                                }
                                else{
                                    document.getElementById("change_OldPassword").classList.add("checkinput");
                                }



                        });
                        
                        
                        document.getElementById("change_OldPasswordRepeat").addEventListener("change",()=>{
                            
                            if(document.getElementById("change_OldPassword").value===document.getElementById("change_OldPasswordRepeat").value){
                                document.getElementById("change_OldPasswordRepeat").classList.remove("checkinput");

                            }
                            else{
                                document.getElementById("change_OldPasswordRepeat").classList.add("checkinput");
                            }


                        });


                        document.querySelector(".newpassbut").addEventListener("click", ()=>{

                            if(changepassword(document.getElementById("change_OldPassword").value,document.getElementById("change_OldPasswordRepeat").value)){

                                loadsecurity();


                            }


                        });
    
    
        
    
    
    
    
                    },800)
    
                }
                else{
                    active_Editing=false;
                    document.getElementById("change_Password").value="************";
                    document.querySelector(".passButton").classList.remove("activeediting");
                    document.querySelector(".password_Span").innerHTML=`Password`;
                    document.getElementById("change_Password").classList.add("FORBIDEDIT");
                    document.getElementById("change_Password").classList.add("checkinput");
                    setTimeout(()=>{
                        document.getElementById("change_Password").classList.remove("checkinput");
                    },500)

                }
            
            

           
              



            
            



        }
            




    });




}






function loadEventsforBillingAdress(){
    let active_editing= false;
    document.querySelector(".editAddressbut").addEventListener("click",()=>{

        if(!active_editing){   
            document.querySelector(".editAddressbut").classList.add("activeediting");

        document.querySelectorAll(".adressinputs").forEach((selected)=>{
            selected.classList.remove("FORBIDEDIT");

        });
        active_editing=true;
        }
        else{
              const Countryselector  = document.querySelector(".select_Country");
              const governorate = document.getElementById("governorate");
              const Street_Name = document.getElementById("Street_Name");
              const home_address = document.getElementById("home_address");
              const pistol_Code= document.getElementById("pistol_Code");

              if(Countryselector.value===""){
                Countryselector.classList.add("checkinput");
        }
        else{
            Countryselector.classList.remove("checkinput");

        }
        if(governorate.value===""){
            governorate.classList.add("checkinput");
        }
        else{
        governorate.classList.remove("checkinput");

        }
        if(Street_Name.value===""){
            Street_Name.classList.add("checkinput");
        }
        else{
        Street_Name.classList.remove("checkinput");

        }
        if(home_address.value===""){
            home_address.classList.add("checkinput");
        }
        else{
        home_address.classList.remove("checkinput");

        }
        if(isNaN(pistol_Code.value) || pistol_Code.value==="" ){
            
            pistol_Code.classList.add("checkinput");
        }
        else{
        pistol_Code.classList.remove("checkinput");

        }

            if(EditAdress(Countryselector, governorate, Street_Name, home_address, pistol_Code)){
                active_editing=false;
                document.getElementById("overlayID").classList.add("overlay");

                setTimeout(()=>{
                    document.getElementById("overlayID").classList.remove("overlay");
                    document.querySelector(".editAddressbut").classList.remove("activeediting");

                    document.querySelectorAll(".adressinputs").forEach((selected)=>{
                        selected.classList.add("FORBIDEDIT");
            
                    });
                 
                },800)
                


            }
         
          


        }

    });



}