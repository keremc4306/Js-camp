console.log("Merhaba Kodlama.io")

//Define variable
//JS is not type-safe
let dolarT = 9.30

let dolarYes = 9.20
dolarYes = "Ankara"
{
    let dolarYes = 9.10
}

console.log(dolarYes)

const euroYes = 11.2
//euroYes = 11

console.log(euroYes)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]

console.log("<ul>")

//i refers to index
for(let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)



