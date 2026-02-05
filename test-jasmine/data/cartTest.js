import { addToCart,cart,loadFromStorage } from "../../data/cart.js";


describe("test suite: addToCart",()=>{  //in addtocart the function uses if sentence , testCoverage=how much of hte code is being tested
    //we try to maximize test coverage
    it("adds and exisiting product to the cart",()=>{

    })

    it("adds a new product to the cart",()=>{ 
        spyOn(localStorage, 'setItem'); //spyOn record every tiem a function is used
        //we cant use expect here instead we modify the cart and check carts look correct
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]); //local storage only supports string
        }) //this will replace local Storage .getItem with fake version
        //and is also object and this has a method .callFake

        loadFromStorage()
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
        expect(cart.length).toEqual(1)  //flaky test a test that sometimes passes and sometiems fails
        //mocks replaces a method with a fake version
        expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    })

})