/* ===== TIPOS PRIMITIVOS ===== */
const stringEl = document.getElementById("type-string")
const numberEl = document.getElementById("type-number")
const bigintEl = document.getElementById("type-bigint")
const booleanEl = document.getElementById("type-boolean")
const nullEl = document.getElementById("type-null")
const undefinedEl = document.getElementById("type-undefined")
const symbolEl = document.getElementById("type-symbol")

// String
const name = "Sanciweferson"
stringEl.innerHTML = `"${name}" <span class="types">tipo → ${typeof name}</span>`
console.log(name, typeof name)

// Number
const age = 18
numberEl.innerHTML = `${age} <span class="types">tipo → ${typeof age}</span>`
console.log(age, typeof age)

// BigInt
const bigNumber = 12345678901234567890n
bigintEl.innerHTML = `${bigNumber} <span class="types">tipo → ${typeof bigNumber}</span>`
console.log(bigNumber, typeof bigNumber)

// Boolean
const isTrue = true
booleanEl.innerHTML = `${isTrue} <span class="types">tipo → ${typeof isTrue}</span>`
console.log(isTrue, typeof isTrue)

// Null
const empty = null
nullEl.innerHTML = `${empty} <span class="types">tipo → ${typeof empty}</span>`
console.log(empty, typeof empty)

// Undefined
let notAssigned
undefinedEl.innerHTML = `${notAssigned} <span class="types">tipo → ${typeof notAssigned}</span>`
console.log(notAssigned, typeof notAssigned)

// Symbol
const id = Symbol("id")
symbolEl.innerHTML = `Symbol() <span class="types">tipo → ${typeof id}</span>`
console.log(id, typeof id)
