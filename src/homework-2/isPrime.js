console.log("---- Asal Sayı Bulma ----")
function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let isPrime = true
        if (numbers[i] <= 1) {
            console.log(`${numbers[i]} asal sayı değildir`)
            continue
        }
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            console.log(`${numbers[i]} asal sayıdır.`)
        } else {
            console.log(`${numbers[i]} asal değildir.`)
        }
    }
}

findPrime(2, 5, 8, 21, 13)