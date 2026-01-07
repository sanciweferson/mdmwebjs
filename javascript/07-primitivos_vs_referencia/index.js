// 1 — primitivos NÃO sofrem mutação
let name = "sa"

// tentativa de mutar (não funciona)
name[0] = "S"

const primitivoTexto = `
let name = "sa"
name[0] = "S"   // tentativa de mutação

Resultado real → "sa"

Strings e outros primitivos são imutáveis.

Para mudar, precisa reatribuir:
name = "Sanci"
`

document.getElementById("code-prim").textContent = primitivoTexto
document.getElementById("result-prim").textContent =
  "Primitivos não mudam por dentro. Você sempre troca o valor inteiro."

// 2 — objetos sofrem mutação
let pessoa = { name: "sa", age: 29 }

pessoa.name = "Sanciweferson"
pessoa.age = 30

const objetoTexto = `
let pessoa = { name: "sa", age: 29 }

pessoa.name = "Sanciweferson"
pessoa.age = 30

Isso é mutação: alterou o conteúdo interno do objeto.
`

document.getElementById("code-obj").textContent = objetoTexto
document.getElementById("result-obj").textContent =
  "Objeto mutado → " + pessoa.name + " , " + pessoa.age

// 3 — const NÃO impede mutação
const user = { name: "san" }

// permitido
user.name = "Sanci"

// proibido
// user = {}

const constTexto = `
const user = { name: "san" }

user.name = "Sanci"   // permitido (mutação interna)

user = {}             // proibido (trocar referência)
`

document.getElementById("code-const").textContent = constTexto
document.getElementById("result-const").textContent =
  "const trava a variável, mas não bloqueia mudanças internas do objeto."

// 4 — reatribuição x mutação
let cidade = "Fortaleza"
cidade = "Rio" // reatribuição

let cidade1 = { city: "Fortaleza" }
cidade1.city = "Rio" // mutação

const extraTexto = `
let cidade = "Fortaleza"
cidade = "Rio"          // reatribuição (primitivo)

let cidade1 = { city: "Fortaleza" }
cidade1.city = "Rio"    // mutação (objeto)
`

document.getElementById("code-extra").textContent = extraTexto
document.getElementById("result-extra").textContent =
  "Primitivo → reatribuição | Objeto → mutação interna."

// 5 — cópia x referência
let a = 10
let b = a
b = 20

let objA = { value: 10 }
let objB = objA
objB.value = 20

const copyTexto = `
let a = 10
let b = a
b = 20

Primitivos → cópia independente

let objA = { value: 10 }
let objB = objA
objB.value = 20

Objetos → mesma referência na memória
Alterar um afeta o outro
`

document.getElementById("code-copy").textContent = copyTexto
document.getElementById("result-copy").textContent =
  "Primitivos copiam valor | Objetos compartilham referência."

// 6 — evitar mutação acidental
const original = { name: "Sanci", age: 20 }

// cópia rasa com spread
const copia = { ...original }
copia.age = 99

// objeto congelado
const congelado = Object.freeze({ nick: "san" })

const safeTexto = `
const original = { name: "Sanci", age: 20 }

const copia = { ...original }   // cópia independente
copia.age = 99                   // não afeta original

const congelado = Object.freeze({ nick: "san" })
// congelado.nick = "outro"     // bloqueado: objeto congelado
`

document.getElementById("code-safe").textContent = safeTexto
document.getElementById("result-safe").textContent =
  "Spread cria cópia nova | freeze bloqueia mutação."
