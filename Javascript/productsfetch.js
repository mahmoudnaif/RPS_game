import {AddToCart, currentUser, changequantity} from "./data.js";
console.log(currentUser);


function loadUserStatus(){
if(!currentUser.login){
   

    let  logginghref= document.querySelector(".logged-button-span");
    document.getElementById("overlayID").classList.add("overlay2nd");

    setTimeout(() => {

        document.querySelector(".logged-button-span").innerHTML =   ` <div class="logintext">Log in</div>`+`<img class="profile-pic" src=${currentUser.pfp}>`;


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
    </div>`+`<img class="profile-pic" src=${currentUser.pfp}>` ; 


    let logoutbut = document.querySelector(".logout");
    let accountcenter = document.querySelector(".acccenter");

    logoutbut.addEventListener( 'click', () => {
        currentUser.login =false;
        currentUser.pfp ="images/loggedoutpng.png";

        localStorage.setItem('currentUser', JSON.stringify({login: false, pfp:"images/loggedoutpng.png"}));

        loadUserStatus();
});

    accountcenter.addEventListener('click', () => {

        window.location.href= "accountcenter.html";

    });






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

if(currentUser.login){
    document.querySelectorAll(".add-to-cart").forEach((button)=>{
        button.addEventListener("click",()=>{
            document.getElementById("overlayID").classList.add("overlay2nd");


            let countprods = document.querySelectorAll(".selectorderQuntity");
            if(countprods){
            for(let i=0; i<countprods.length; i++){
            countprods[i].selectedIndex= currentUser.myorders[i].quantity-1;
            }
        }
            setTimeout(()=>{
                document.getElementById("overlayID").classList.remove("overlay2nd");
                AddToCart(button.dataset.prodid);
        
            },800)

       

        });

})



  }

}


async function loadshoppingcart(){

    let htmlCart=``;
    let totalprice=0;
    for(let i=0; i<currentUser.myorders.length; i++){

    const x = await fetch(`https://fakestoreapi.com/products/${currentUser.myorders[i].prodId}`);
    let carted_Prods = await x.json();
    totalprice+= Number(carted_Prods.price)*100;
    htmlCart+=`
    <div class="ordered-prod">
    <span id=${carted_Prods.id}></span>
<div class="orderedImg"><img src="${carted_Prods.image}" ></div>
<div class="orderedInfo">
        <div class="containprderedorice">
            <span class="orderedPrice">
                price: <p1>${carted_Prods.price}</p1>
            </span>
            <select class="selectorderQuntity"   data-prodid=${currentUser.myorders[i].prodId}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="17">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
        </div>
    
    <div class="orderedInfoTitle" >
        $${carted_Prods.title}
    
     </div>  

</div>

</div>
    
    
    
    `    
 }
htmlCart+=`<div class="referToCheckout">
<p1>total: <p1 class="totalPrice">${totalprice/100}</p1></p1>
<button class="refretoShoppingcart">shopping-cart</button>

</div>`;
document.querySelector(".shoppingcart-list").innerHTML=htmlCart;

let countprods = document.querySelectorAll(".selectorderQuntity");

for(let i=0; i<countprods.length; i++){
countprods[i].selectedIndex= currentUser.myorders[i].quantity-1;

countprods[i].addEventListener("change", () => {
    
    changequantity(countprods[i].dataset.prodid, countprods[i].value);

    document.getElementById(countprods[i].dataset.prodid).classList.add("overlay30000");
    setTimeout(()=>{
        document.getElementById(countprods[i].dataset.prodid).classList.remove("overlay30000");

    },800)

});


}







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



if(currentUser.login){
if(currentUser.myorders.length>0){


document.querySelector(".shopping-cart-span").innerHTML=`
<div class="shoppingcart-list">
    


    
    </div>`+document.querySelector(".shopping-cart-span").innerHTML;


    loadshoppingcart();
}

}
 


loadproduct('https://fakestoreapi.com/products');
loadcatergoteis();
loadUserStatus();