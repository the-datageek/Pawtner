// carousel category
// store.html functionality
let cartIcon =  document.querySelector('#cart-icon')
let cart =  document.querySelector('.cart')
let closeCart =  document.querySelector('#close-cart')
// open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
// close cart
closeCart.onclick = () => {
    cart.classList.add("active");
}

// Cart Working JS
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

// Making function
function ready(){
    // remove items
    var removeCartButtons= document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for(var i=0; i< removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // Quantity changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for(var i=0; i< quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener("change", quanityChanged);
    
    }
    // Add To Cart
    var addCart = document.getElementsByClassName('add-cart')
    for(var i=0; i< addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked)
    }
}


// Remove Items from Cart  
function removeCartItems(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

// Quantity changes
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}

// update total
function updatetotal(){
    var cartContent = document.getElemtnsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var total = 0;
    for (var i= 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$"),"")
        var quantity = quantityElement.value;
        total = total + price * quantity;
        // If price contains some cents value
        total = Math.round(total * 100)/100;

        document.getElementByClassName('total-price')[0].innerText = '$' +  total;
    }
}