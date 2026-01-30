export let cart=JSON.parse(localStorage.getItem('cart') )//take one string name of what we saved earlier
    //first whn we load the webpage we might not have anything in cart so we need to give default value

    if (!cart){
        cart=[{
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2
        },
        {
            productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity:1
        }
        ]
    }


function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart)) //first argument- name  we give of whatever we want to save
    //second the actual item we want to store but only string can be saved so conervt to string first
}

export function addToCart(productId){
    let matchingItem;
         cart.forEach((cartItem)=>{
          if (productId===cartItem.productId){
              matchingItem=cartItem;
          }
         })
  
         if(matchingItem){
          matchingItem.quantity+=1;
         }
         else{
          cart.push({
              productId: productId,
              quantity: 1
             })
         }
         saveToStorage()
  
  }

export function removeFromCart(productId){
    const newCart=[]
    cart.forEach((cartItem)=>{
        if(cartItem.productId!==productId){
            newCart.push(cartItem)
        }
    })

    cart=newCart
    saveToStorage()
}
//after export this variable can be used outside cart.js