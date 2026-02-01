export function formatCurrency(priceCents){
    return (Math.round(priceCents)/100).toFixed(2)
}

export default formatCurrency
//now when we import htis we can import this without curly braces
//ecah file can have only one default export
//however in your own code its upto you which version of export you want to use
//the syntax with curly bracses in called named export, some libraris use default export while some library use named export

//not every library has esm version thought, some library need to use script version