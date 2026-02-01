//main idea of javascript , first save the data and then generate the html
import {cart,removeFromCart,updateDeliveryOption} from '../../data/cart.js'
import {products,getProduct} from '../../data/products.js'
import {formatCurrency} from '../utils/money.js'
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import {deliveryOptions,getDeliveryOption} from '../../data/deliveryOptions.js'
//this is new syntax, we use it when we only want to use one thing from source like only one miport
//gives us an object having current dayte and time
//external libraries generally have documentation we use to see how do we use it
const today=dayjs()
  //this will add 7 days to todays date
const deliveryDate=today.add(7,'days') //okay now wee added 7 days, now accroding to documentation we also have a method called
//.format which will make it easy to read
console.log(deliveryDate.format(`dddd, MMMM D`))
console.log(deliveryDate)

export function renderOrderSummary(){
let cartSummaryHTML=''
cart.forEach((cartItem)=>{
      const productId=cartItem.productId
      //now we use the productId to search for full product which is inside our products.js file inside products array
      const matchingProduct =getProduct(productId)

      
      const deliveryOptionId=cartItem.deliveryOptionId
      deliveryOptionId

      const deliveryOption=getDeliveryOption(deliveryOptionId)
      
      const today=dayjs()
        const deliveryDate=today.add(
          deliveryOption.deliveryDays,
          'days'
        )

        const dateString = deliveryDate.format(
          'dddd, MMMM D'
        )

      cartSummaryHTML+=`
          <div class="cart-item-container 
          js-cart-item-container-${matchingProduct.id}">
              <div class="delivery-date">
                Delivery date: ${dateString}
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${matchingProduct.image}">

                <div class="cart-item-details">
                  <div class="product-name">
                    ${matchingProduct.name}
                  </div>
                  <div class="product-price">
                    $${formatCurrency(matchingProduct.priceCents)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  ${deliveryOptionsHTML(matchingProduct,cartItem)}
                  </div>
                </div>
              </div>
            </div>
      
      `
  })

  function deliveryOptionsHTML(matchingProduct,cartItem){
    let html= '';
    deliveryOptions.forEach((deliveryOption)=>{
      const today=dayjs()
      const deliveryDate=today.add(
        deliveryOption.deliveryDays,
        'days'
      )

      const dateString = deliveryDate.format(
        'dddd, MMMM D'
      )

      const priceString = deliveryOption.priceCents===0
      ? `Free`
      : `$${formatCurrency(deliveryOption.priceCents)} -`

      const isChecked = deliveryOption.id===cartItem.deliveryOptionId

      //this is ternary operator if first part is true value is wahterver after question mark else after :
      html +=
      `
      <div class="delivery-option js-delivery-option"
      data-product-id = "${matchingProduct.id}"
      data-delivery-option-id = "${deliveryOption.id}">
                    <input type="radio"
                      ${isChecked ? 'checked':''}
                      class="delivery-option-input"
                      name="delivery-option-${matchingProduct.id}">
                    <div>
                      <div class="delivery-option-date">
                      ${dateString}
                      </div>
                      <div class="delivery-option-price">
                        ${priceString} Shipping
                      </div>
                    </div>
                  </div>
      `
    })
    return html
  }

  document.querySelector('.js-order-summary').innerHTML=cartSummaryHTML

  document.querySelectorAll('.js-delete-link').forEach((link)=>{
      link.addEventListener('click',()=>{
          const productId = link.dataset.productId
          removeFromCart(productId)

          const container=document.querySelector(`.js-cart-item-container-${productId}`)
          container.remove()
      })
  })

  document.querySelectorAll('.js-delivery-option').forEach((element)=>{
    element.addEventListener('click',()=>{
      const {productId,deliveryOptionId}=element.dataset  //shorthand property
      updateDeliveryOption(productId,deliveryOptionId)
      renderOrderSummary()
    })
  })

  //we put the event listerner inside our
}



//better way to update the entire page
