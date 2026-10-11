const hamburgerMenu = document.getElementById("hamburgerMenu")
const navbarLink = document.getElementById("navbarLink")
const closeMenu = document.getElementById("closeMenu")
const paymentBtn = document.getElementById("paymentBtn")

hamburgerMenu.addEventListener('click', () => {
    navbarLink.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navbarLink.classList.remove('active')
});

const cart = {
    'Latte': 0,
    'Avocado Espresso': 0,
    'Chocolate' : 0, 
    'Caramel Macchiato': 0,
    'Lemonade': 0,
    'Vanilla Bean Cold Foam Brew': 0, 
    'Ice Spanish Latte': 0,
    'Dirty Chai Latte': 0,
    'Hazelnut Mocha': 0, 
    'Nitro Cold Brew': 0,
    'Hibiscus Berry Tea': 0, 
    'Taro Milk Tea': 0, 
    'Strawberry Cream Sparkler': 0, 
    'Hot Apple Cider': 0,
    'Matcha Coconut Water': 0,
    'Avocado Egg Toast': 0,
    'Smoked Salmon Bagel': 0,
    'Cinnamon Roll': 0,
    'Blueberry Scone': 0, 
    'Almond Croissant': 0
}

function add(product){
    cart[product]++
    document.getElementById(`count` + product).textContent = cart[product]
    localStorage.setItem('mrcoffee_cart', JSON.stringify(cart))
}

function mines(product){
    if(cart[product] > 0){
        cart[product]--
        document.getElementById(`count` + product).textContent = cart[product]
        localStorage.setItem(`mrcoffee_cart`, JSON.stringify(cart))
    }
}

document.addEventListener(`DOMContentLoaded`, () => {
    const orderContainer = document.querySelector('.orderContainer');
    const totalPayment = document.getElementById("totalPayment")
    const totalItem = document.getElementById("totalItem")

    if(!orderContainer){
        return
    }
    const savedCart = localStorage.getItem(`mrcoffee_cart`)
    const cart = savedCart ? JSON.parse(savedCart) : {}

    orderContainer.innerHTML = ''
    let totalPay = 0;
    let item = 0

    for(const product in cart){
        const total = cart[product]

        if(total > 0){
            let price = 0;
            if(product == 'Latte'){
                price = 2.9
            }else if(product == 'Avocado Espresso'){
                price = 5.1
            }else if (product == 'Chocolate'){
                price = 3.3
            }else if (product == 'Caramel Macchiato'){
                price = 4.3
            }else if (product == 'Lemonade'){
                price = 4.3
            }else if(product == 'Vanilla Bean Cold Foam Brew'){
                price = 6.7
            }else if(product == 'Ice Spanish Latte'){
                price = 2.0
            }else if(product == 'Dirty Chai Latte'){
                price = 3.4
            }else if(product == 'Hazelnut Mocha'){
                price = 4.4
            }else if(product == 'Nitro Cold Brew'){
                price = 6.1
            }else if(product == 'Hibiscus Berry Tea'){
                price = 5.5
            }else if(product == 'Taro Milk Tea'){
                price = 6.0
            }else if(product == 'Strawberry Cream Sparkler'){
                price = 2.3
            }else if(product == 'Hot Apple Cider'){
                price = 3.2
            }else if(product == 'Matcha Coconut Water'){
                price = 4.0
            }else if(product == 'Avocado Egg Toast'){
                price = 5.0
            }else if(product == 'Smoked Salmon Bagel'){
                price = 5.2
            }else if(product == 'Cinnamon Roll'){
                price = 3.2
            }else if(product == 'Blueberry Scone'){
                price = 2.6
            }else if(product == 'Almond Croissant'){
                price = 3.0
            }

        const totalPrice = (total * price)
        totalPay += totalPrice

        orderContainer.innerHTML += `
        <div class="orderItem">
            <p class="nameMenu">${product}</p>
            <p>(${total}x - $${totalPrice.toFixed(2)})</p> 
        </div>`

        item++
       }
    }
    
    totalItem.textContent = `Total Item: ${item}`
    totalPayment.textContent = `Total price: $${Number(totalPay).toFixed(2)}`
})


if(paymentBtn){
    paymentBtn.onclick = function(){
    const cartData = JSON.parse(localStorage.getItem("mrcoffee_cart")) || []

    if(cartData.length === 0){
        window.alert("Cannot make payment because you has not selecting any products")
        window.location.href = "product.html"
        return
    }else{
        window.alert("Payment Succesfull, Thank You and Enjoy Your Drinks and Meals")
        window.location.href = "index.html"
        localStorage.removeItem("mrcoffee_cart")
    }
}
}
