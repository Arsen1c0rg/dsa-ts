function happyNumberTest(n: number, set: Set<number>): boolean {
    // const set = new Set()
    // let res = 0

    // while (res !== 1) {
    //     if (set.has(res)) return false
    //     res = findSquareSum(n)
    // }
    if (n === 1) return true

    const sum = findSquareSum(n)
    if (set.has(sum)) return false

    set.add(sum)
    return happyNumberTest(sum, set)
}

function findSquareSum(num: number) {
    let sum = 0

    while (num > 0) {
        /* 
            - Grab the last number
            - add the square of it to the sum
            - remove the last element from the original num variable
        */

        // grab the last number
        let digit = num % 10
        // add the square of the last number to the sum variabel
        sum += digit * digit
        // remove the last digit from the orignal number
        num = Math.floor(num / 10)
    }
    return sum
}

// console.log(happyNumberTest(12, new Set()));

function happyNumberBrute(n: number) {
    /* 
        - Calculate the sum of the squares of the given numbers digits
        - if sum === 1 return it as a happy number
        - if !== 1, replace n with the sum and repeat the above steps
            until n converges  to 1 or an inifite loop is detected
        - if infinite loop is detected, return false 
    */
    let sum = findSquareSum(n)
    let set = new Set<number>()

    while (sum !== 1) {
        if (!set.has(sum)) set.add(sum)
        console.log(sum);

        sum = findSquareSum(sum)
        if (set.has(sum)) return false
        set.add(sum)
    }

    return true
}
console.log(happyNumberBrute(23)); 