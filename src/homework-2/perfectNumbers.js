console.log("---- 1000'e kadar olan Mükemmel Sayılar----")
function perfectNumber(limit) {
    for (let i = 1; i < limit; i++) {
        let sum = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                sum += j;
            }
        }
        if (sum == i) {
            console.log([i] + "-->" + " Mükemmel Sayıdır.")
        }
    }
}
perfectNumber(1000)