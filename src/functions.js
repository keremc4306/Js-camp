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

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5} //obje

//metot imzası 32-34 arası
function addToCart3(product) {
    console.log("Ürün: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyat: " + product.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3;
product2.productName = "KARPUZ"
console.log(product3.productName)

//Not: Sayısal değerler değer tip; objeler, arrayler referans tip

//Yönetim diyor ki birden fazla ürünü sepete ekleyebilirsin
function addToCart4(x) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products) //x'e referansını gönderiyoz.
