

/*
 * Given an array of one or more vanity codes and an array of phone numbers, write a function to find all phone numbers that match one or more vanity codes.
 * The output must be a sorted array of unique phone numbers from the input array of numbers.
 *
 * Complete the 'vanity' function below.
 *
 * The function is expected to return a STRING_ARRAY of numbers.
 * The function accepts following parameters:
 *  1. STRING_ARRAY codes
 *  2. STRING_ARRAY numbers
 */


const mobileKeyPadMap={
    A:2,
    B:2,
    C:2,
    D:3,
    E:3,
    F:3,
    G:4,
    H:4,
    I:4,
    J:5,
    K:5,
    L:5,
    M:6,
    N:6,
    O:6,
    P:7,
    Q:7,
    R:7,
    S:7,
    T:8,
    U:8,
    V:8,
    W:9,
    X:9,
    Y:9,
    Z:9
}

function vanity(codes, numbers) {
    //convert codes to numCodes
   let numCodes= codes.map(code=>[...code].map(c=>mobileKeyPadMap[c]).join(""))
   return [...new Set(numbers.filter(num=>numCodes.some(nc=>num.includes(nc))))].sort()
}
