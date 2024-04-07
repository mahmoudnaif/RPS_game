import {currentUser} from "./data.js";
console.log(currentUser);

let innterhtmlForUSER= document.querySelector(".logged-button-span").innerHTML;

function loadUserStatus(){
if(!currentUser.login){
   

    let  logginghref= document.querySelector(".logged-button-span");
    document.getElementById("overlayID").classList.add("overlay2nd");

    setTimeout(() => {

        document.querySelector(".logged-button-span").innerHTML =   ` <div class="logintext">Log in</div>`+innterhtmlForUSER;


        document.getElementById("overlayID").classList.remove("overlay2nd");
        logginghref.addEventListener("click", function(){
           
            window.location.href= "loggingin.html";
            
            });



    }   ,1000)
    
}
else{
    document.querySelector(".logged-button-span").innerHTML =   `<div class="accountlist">
    <span class="acccenter">Account center</span>
    <span class="logout">log out</span>
    </div>`+innterhtmlForUSER ; 


    let logoutbut = document.querySelector(".logout");

    logoutbut.addEventListener( 'click', () => {
        currentUser.login =false;

        localStorage.setItem('currentUser', JSON.stringify({login: false}));

        loadUserStatus();
})






    }
}
let myProdS;

async function loadproduct(apilink) {
    const x = await fetch(apilink);
    myProdS = await x.json();

    let prodHtml=``;

    
    myProdS.forEach((product) => {
        
prodHtml+=`
<div class="products">
<div class="productimgcontain">
    <img class="productimg" src="${product.image}">
    <div class="product-describtion">
        ${product.description}
    </div>
</div>

<div class="product-info">
<div class="product-title">
   ${product.title}
</div>  




<div class="add-to-cart-containter">
                
<span>
    price: <p1>${product.price}$</p1>
</span>

<button class="add-to-cart"  data-prodID = ${product.id}>
    add to cart
 </button>    
</div>


</div>




</div>





`
    });


    document.querySelector(".myoutline").innerHTML= prodHtml;

  }

  


let myselector = document.querySelector(".categorty-selector");

async function loadcatergoteis(){

   const x = await fetch('https://fakestoreapi.com/products/categories');
   const mycategories = await x.json();

   let htmlcateg=` <option class="option" value="All">All</option>   `;

mycategories.forEach((category) => {
htmlcateg+= `
<option class="option" value="${category}">${category}</option>

`

});
myselector.innerHTML=htmlcateg;

}


myselector.addEventListener("change",function(){

    document.querySelector(".myoutline").innerHTML=`        <div class="wait-for-data products" >
    <div class="overlay products">

    </div>
</div>

<div class="wait-for-data products" >
    <div class="overlay products">

    </div>
</div>
<div class="wait-for-data products" >
    <div class="overlay products">

    </div>
</div>
<div class="wait-for-data products" >
    <div class="overlay products">

    </div>
</div>
<div class="wait-for-data products" >
    <div class="overlay products">

    </div>
</div>
<div class="wait-for-data products" >
    <div class="overlay products">

    </div>
</div>
<div class="wait-for-data products" >
    <div class="overlay products">

    </div>
</div>
<div class="wait-for-data products" >
    <div class="overlay products">

    </div>
</div>
<div class="wait-for-data products" >
    <div class="overlay products">

    </div>
</div>
<div class="wait-for-data products" >
    <div class="overlay products">

    </div>
</div>`;







if(myselector.value!="All"){
    loadproduct(`https://fakestoreapi.com/products/category/${myselector.value}`); 
}
else{
    loadproduct('https://fakestoreapi.com/products');
}
    
    
    });


 


loadproduct('https://fakestoreapi.com/products');
loadcatergoteis();
loadUserStatus();