console.log("---- 1000'e Kadar Olan Tüm Asal Sayılar ----")
function primeNumbers(limit) {
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        if (i == 2) {
            console.log(`${i} asal sayıdır.`)
            continue
        }
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break
            }
        }
        if (isPrime) {
            console.log(`${i} asal sayıdır.`)
        }
    }
}
primeNumbers(1000)