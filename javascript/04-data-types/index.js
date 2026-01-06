/*
  Seleciona o elemento HTML onde o valor será exibido
*/
const string = document.getElementById("types-string")

/*
  Variável do tipo STRING
  Strings representam textos em JavaScript
*/
const name = "Sanciweferson"

/*
  innerHTML permite inserir texto + HTML
  Aqui mostramos:
  - o valor da variável
  - o tipo retornado pelo typeof
*/
string.innerHTML = `
  "${name}"
  <span class="types">
    tipo → ${typeof name}
  </span>
`

/*
  Exibe no console:
  - o valor
  - o tipo do valor
*/
console.log(name, typeof name)

const numbe = document.getElementById("types-number")

const age = 29
numbe.innerHTML = `
  ${age}
  <span class="types">
    tipo → ${typeof age}
  </span>
`




/* null */
const  aptNumber = document.getElementById("types-aptNumber")

const aptNull = null
aptNumber.innerHTML = `
  ${aptNull}
  <span class="types">
    tipo → ${typeof aptNull}
  </span>
`

/* Boolean */



const haskidsBoolean = document.getElementById("types-haskids")

const haskids = true
haskidsBoolean.innerHTML = `
  ${haskids}
  <span class="types">
    tipo → ${typeof haskids}
  </span>
`


/* ===== undefined ===== */
let value
const undefinedEl = document.getElementById("type-undefined")

undefinedEl.innerHTML = `
  undefined
  <span class="types">tipo → ${typeof value}</span>
`

console.log(value, typeof value)

/* ===== symbol ===== */
const id = Symbol("id")
const symbolEl = document.getElementById("type-symbol")

symbolEl.innerHTML = `
  Symbol()
  <span class="types">tipo → ${typeof id}</span>
`

console.log(id, typeof id)

/* ===== bigint ===== */
const bigNumber = 123456789012345678901234567890n
const bigintEl = document.getElementById("type-bigint")

bigintEl.innerHTML = `
  ${bigNumber}
  <span class="types">tipo → ${typeof bigNumber}</span>
`

console.log(bigNumber, typeof bigNumber)
