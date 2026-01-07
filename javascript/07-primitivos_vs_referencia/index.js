// 1 — primitivos não sofrem mutação
let name = "sa"

// tentativa de mutar (não funciona)
name[0] = "S"

const primitivoTexto = `
let name = "sa"
name[0] = "S"   // tentativa de mutação

resultado real → "sa"
novo valor só trocando tudo:
name = "Sanci"
`

document.getElementById("code-prim").textContent = primitivoTexto
document.getElementById("result-prim").textContent =
  "Strings são imutáveis: o valor não muda, só é substituído por outro."

// 2 — objetos sofrem mutação
let pessoa = { name: "sa", age: 29 }

pessoa.name = "Sanciweferson"
pessoa.age = 30

const objetoTexto = `
let pessoa = { name: "sa", age: 29 }

pessoa.name = "Sanciweferson"
pessoa.age = 30
`

document.getElementById("code-obj").textContent = objetoTexto
document.getElementById(
  "result-obj"
).textContent = `Objeto mudou por dentro → ${pessoa.name}, ${pessoa.age}`

// 3 — const NÃO impede mutação
const user = { name: "san" }

// isso pode
user.name = "Sanci"

// isso NÃO pode
// user = {}

const constTexto = `
const user = { name: "san" }

user.name = "Sanci"   // permitido (mutação interna)

user = {}             // proibido (trocar referência)
`

document.getElementById("code-const").textContent = constTexto
document.getElementById("result-const").textContent =
  "const trava a variável, não o conteúdo do objeto."

let cidade = "Fortaleza"

console.log((cidade = "rio"))

let cidade1 = {
  city: "Fortaleza",
}

console.log((cidade1.city = "rio"))
