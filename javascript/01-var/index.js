age = 29

age = 39

console.log(age)
// Execução real
var nameVar1 = document.getElementById("js-value-1")
var name = "Sanciweferson"
nameVar1.textContent = `${name}`

var nameVar2 = document.getElementById("js-value-2")
name = "San"
nameVar2.textContent = `${name}`

var nameVar3 = document.getElementById("js-value-3")
name = "Weferson"
nameVar3.textContent = `${name}`

/*var ignora blocos */
var bloco = document.getElementById("result")

for (var i = 0; i < 1; i++) {}
bloco.textContent = `${i}`

var valor = 100

function teste() {
  return valor
  var valor = 10
}

console.log(teste())
