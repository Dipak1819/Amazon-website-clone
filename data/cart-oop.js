function Cart(localStorageKey){
    //in oop we use PascalCase
    const cart={
        cartItems:undefined, //inside class we cant use export and let
    
        loadFromStorage(){ //we use regular syntax function here, function inside an object is called method
            this.cartItems=JSON.parse(localStorage.getItem(localStorageKey) )//take one string name of what we saved earlier
            //first whn we load the webpage we might not have anything in cart so we need to give default value
        
            if (!this.cartItems){ //this will give us the outer object
                this.cartItems=[{
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 2,
                    deliveryOptionId: '1'
                },
                {
                    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity:1,
                    deliveryOptionId: '2'
                }
                ]
            }
        
        },
    
        saveToStorage(){
        localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems)) //first argument- name  we give of whatever we want to save
        //second the actual item we want to store but only string can be saved so conervt to string first
        },
        
    
        addToCart(productId){
        let matchingItem;
             this.cartItems.forEach((cartItem)=>{
              if (productId===cartItem.productId){
                  matchingItem=cartItem;
              }
             })
      
             if(matchingItem){
              matchingItem.quantity+=1;
             }
             else{
              this.cartItems.push({
                  productId: productId,
                  quantity: 1,
                  deliveryOptionId:'1'
                 })
             }
             this.saveToStorage()
      
      },
    
     removeFromCart(productId){
        const newCart=[]
        this.cartItems.forEach((cartItem)=>{
            if(cartItem.productId!==productId){
                newCart.push(cartItem)
            }
        })
    
        this.cartItems=newCart
        this.saveToStorage()
    },
    
    
    //after export this variable can be used outside cart.js
    updateDeliveryOption(productId,deliveryOptionId){
        let matchingItem;
        this.cartItems.forEach((cartItem)=>{
         if (productId===cartItem.productId){
             matchingItem=cartItem;
         }
        })
    
        matchingItem.deliveryOptionId=deliveryOptionId
        this.saveToStorage()
    }
    }

    return cart
}

const cart=Cart('cart-oop')
const businessCart=Cart('cart-business')

//oop tries to represent the real world, 
cart.loadFromStorage() //inside this function it will give the cart item this default cart with 2 product inside

//another reason we use oop because its easy to create multiple objects






//oop tries to represent the real world, 
businessCart.loadFromStorage()

console.log(cart);
console.log(businessCart)
 //write now we are copy pasting code which makes our code really hard to read 