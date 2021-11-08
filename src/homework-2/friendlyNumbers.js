console.log("----Arkadaş Sayıları Bulma----")
function isFriendsNumber(num1, num2) {
    let num1sum = 0;
    let num2sum = 0;
    for (let i = 0; i < num1; i++) {
        if (num1 % i == 0) {
            num1sum += i;
        }
    }
    for (let j = 1; j < num2; j++) {
        if (num2 % j == 0) {
            num2sum += j;
        }
    }
    console.log(num1 + " sayısının kendisi hariç bölenler toplamı: " + num1sum + " olur")
    console.log(num2 + " sayısının kendisi hariç bölenler toplamı: " + num2sum + " olur")

    if (num1sum == num2 && num2sum == num1) {
        console.log(num1 + " ve " + num2 + " sayıları arkadaş sayılardır.")
    }
    else {
        console.log(num1 + " ve " + num2 + " sayıları arkadaş sayı değillerdir.")
    }
}
isFriendsNumber(245, 284)