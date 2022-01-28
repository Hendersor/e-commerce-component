const iconMenu = document.getElementById('iconMenu');
const menuContainer = document.getElementById('mobileContainerMenu')
const crossMenu = document.getElementById('crossContainer');
const cartIcon = document.getElementById('cartIcon');
const cartContainer = document.getElementById('cartContainer');
const minusPlusButtons = document.querySelectorAll('.addRemove img');
const many = document.getElementById('many');
const addCartButton = document.getElementById('addCart');


let amount = 0;
const item = {
     name: "Fall Limited Editon Sneakers",
     price: "$125.00",
}


//Deploy and hide cart 
cartIcon.addEventListener('click', deployCart);
function deployCart(){
     const amountCounter = document.getElementById('amountCounter');
     if(cartContainer.classList.contains('noneCart')){
          if(amountCounter.classList.contains('amountOn')){
               cartContainer.classList.replace('noneCart','displayCart')
               showProducts();
          }else{
               cartContainer.innerHTML = `<p>Empty cart </p>`
          }
    
     }else if(cartContainer.classList.contains('displayCart')){
        cartContainer.classList.replace('displayCart', 'noneCart')
     }    
}

function showProducts(){
     const cartContainerProduct = document.getElementById('cartContainerProduct');
     const buttonContainer = document.getElementById('buttonContainer')
     cartContainerProduct.classList.replace('noDisplayContainer', 'yesDisplayContainer')
     buttonContainer.classList.replace('noDisplayContainer', 'yesDisplayContainer');
     // const productContainer = document.getElementById('productCartContainer');
     // console.log(productContainer);
     // productContainer.classList.replace('noneProduct', 'product')  
     // const nameProduct = document.getElementById('nameProduct');
     // nameProduct.innerText = item.name;
}

//Hide cart
document.body.addEventListener('click', hideCart);
function hideCart(e){
if(e.target.classList.contains('cart-icon') || e.target.classList.contains('cartContainer2')){
     return
}else if(cartContainer.classList.contains('displayCart')){
          cartContainer.classList.replace('displayCart', 'noneCart')
     }
}


//Close menu
crossMenu.addEventListener('click', closeMenu);
function closeMenu(){
     menuContainer.classList.replace('onMenu', 'offMenu')
}

//Show mobile menu
const deployMenu = () =>{
     menuContainer.classList.replace('offMenu', 'onMenu')
}
iconMenu.addEventListener('click', deployMenu);

//Quantity
minusPlusButtons.forEach( btn => {
     btn.addEventListener('click', () => {
          if(btn.classList.contains('plus')){
               amount += 1;
               many.innerText = amount;
          }else if(btn.classList.contains('minus')){
               amount -=1;
               if(amount < 0){
                    amount = 0;
               }
               many.innerText = amount;
          }
     })
})


//add to cart and notification
addCartButton.addEventListener('click', addToCart);
const amountCounter = document.getElementById('amountCounter');

function addToCart(){
     if(amount > 0){
       amountCounter.classList.replace('amountOff', 'amountOn')  
       amountCounter.innerText = amount   
     }else{
          return
     }
}




//Clean cart

// const trashIcon = document.getElementById('trashIcon');
// trashIcon.addEventListener('click', cleanCart);


// function cleanCart(){
//      amountCounter.classList.replace('amountOn', 'amountOff');
//      amount = 0;
// }