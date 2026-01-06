/* ===== TIPOS DE REFERÊNCIA ===== */
const objectEl = document.getElementById("type-object")
const arrayEl = document.getElementById("type-array")
const functionEl = document.getElementById("type-function")
const dateEl = document.getElementById("type-date")
const mapEl = document.getElementById("type-map")
const setEl = document.getElementById("type-set")
const weakMapEl = document.getElementById("type-weakmap")
const weakSetEl = document.getElementById("type-weakset")
const regexpEl = document.getElementById("type-regexp")

// Object
const obj = { name: "Sanciweferson", age: 18 }
objectEl.innerHTML = `{...} <span class="types">tipo → ${typeof obj}</span>`
console.log(obj, typeof obj)

// Array
const arr = [1, 2, 3]
arrayEl.innerHTML = `[1,2,3] <span class="types">tipo → ${typeof arr}</span>`
console.log(arr, typeof arr, Array.isArray(arr))

// Function
const fn = function () {
  return "Hello"
}
functionEl.innerHTML = `function(){} <span class="types">tipo → ${typeof fn}</span>`
console.log(fn, typeof fn)

// Date
const today = new Date()
dateEl.innerHTML = `new Date() <span class="types">tipo → ${typeof today}</span>`
console.log(today, typeof today)

// Map
const map = new Map()
mapEl.innerHTML = `new Map() <span class="types">tipo → ${typeof map}</span>`
console.log(map, typeof map)

// Set
const set = new Set([1, 2, 3])
setEl.innerHTML = `new Set() <span class="types">tipo → ${typeof set}</span>`
console.log(set, typeof set)

// WeakMap
const weakMap = new WeakMap()
weakMapEl.innerHTML = `new WeakMap() <span class="types">tipo → ${typeof weakMap}</span>`
console.log(weakMap, typeof weakMap)

// WeakSet
const weakSet = new WeakSet()
weakSetEl.innerHTML = `new WeakSet() <span class="types">tipo → ${typeof weakSet}</span>`
console.log(weakSet, typeof weakSet)

// RegExp
const regex = /ab+c/
regexpEl.innerHTML = `/ab+c/ <span class="types">tipo → ${typeof regex}</span>`
console.log(regex, typeof regex)
