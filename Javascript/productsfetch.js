let myProdS;

async function getText(file) {
    const x = await fetch(file);
    myProdS = await x.json();

    let prodHtml=``;

    
    myProdS.forEach((product) => {
        
prodHtml+=`
<div class="products">
<span class="productimgcontain">
    <img class="productimg" src="${product.image}">
    <div class="product-describtion">
        ${product.description}
    </div>
</span>

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
getText('https://fakestoreapi.com/products');
 



