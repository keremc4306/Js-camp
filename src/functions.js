//sepete ekleme
//do not repeat yourself - kendini tekrar etme
function addToCart(quantity, productName = "Elma") {
    console.log("Sepete eklendi. Ürün: "  + productName + " adet: "+ quantity)
}

addToCart(10)

let sayHello = () => {
    console.log("Hello world!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello world 2!")
}

sayHello2()