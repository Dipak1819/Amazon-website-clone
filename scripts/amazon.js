//we generated the html below and now its time to save
//the products variable will be coming from the file
//this is how real world html works we save the data into a file and then generate the file 
import {cart,addToCart} from '../data/cart.js'
import {products} from '../data/products.js'

//..means folder outside current folder
//rules for modules, put all module at the top of file
//also modeules dont work if we open html file directly, we need to use liver server
//benefits of modeules is it helps us avoid naming conflicts
//we can also do import {cart as mycart} from '../data//'
//second benefit is we dont have to worry about order of file
//before order of script tag really matters, befroe we had to import cart file before doing other amazon.js file
let productsHTML = ''; 



//now we saved the data , now second step is to generate the html
products.forEach((product)=>{  //it takes each object saves it in product and runs the function
    productsHTML+=`
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}" >
            Add to Cart
          </button>
        </div>
    `

    
})


document.querySelector('.js-products-grid').innerHTML = productsHTML

function updateCartQuantity(){
  let cartQuantity=0
       cart.forEach((cartItem)=>{
        cartQuantity+=cartItem.quantity
       })

       document.querySelector('.js-cart-quantity').innerHTML=cartQuantity
       
}
document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
       const productId=button.dataset.productId//dataset gives all the data attribtue attach to element
       //name gets converted from kabab case to camel case product-name to productName
       addToCart(productId)
       updateCartQuantity()
      
    })
})
