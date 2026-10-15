// COMPARISON OPERATORS
// > greater than
// < lesser than
// >= greater than or equal
// <= lesser than or equal
// == equal (doesnt check type)
// === strictly equal
// ! NOT
// != different (doesnt check type)
// !== strictly different

console.log(5 > 3) //true
console.log(10 <= 0) //false
console.log("10" == 10) //true
console.log("2" === 2) //false
console.log(5 !== "5") //true 

// LOGICAL OPERATORS
// && AND
// || OR
// ! not

const age = 25
const hasId = false
const inputUsername = "Daniel"
const username = inputUsername || "user does not have a name"
const isAdmin = false && "Welcome"

console.log("this is username:", username)
console.log("isAdmin", isAdmin)
console.log(age >= 18 && !hasId)

const volume = 0

console.log(volume ?? 50) //nullish coalescing ??
