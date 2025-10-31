// Obter elementos do DOM
const decimalInput = document.getElementById("decimal-input")
const convertBtn = document.getElementById("convert-btn")
const resultDiv = document.getElementById("result")
const errorMessage = document.getElementById("error-message")

function mostrarErro(mensagem) {
  errorMessage.textContent = mensagem
  errorMessage.classList.add("show")
  decimalInput.classList.add("error")
  resultDiv.innerHTML = ""
}

function limparErro() {
  errorMessage.classList.remove("show")
  decimalInput.classList.remove("error")
}

// Função para converter o número
function converter() {
  limparErro()

  // Obter o valor do campo de entrada
  const valor = decimalInput.value.trim()

  if (valor === "") {
    mostrarErro("Por favor, digite um número válido.")
    return
  }

  const decimalValue = Number.parseInt(valor)

  if (isNaN(decimalValue) || decimalValue < 0) {
    mostrarErro("Por favor, digite um número válido (maior ou igual a 0).")
    return
  }

  // Converter decimal → binário
  const binario = decimalValue.toString(2)

  // Converter decimal → hexadecimal
  const hexadecimal = decimalValue.toString(16).toUpperCase()

  resultDiv.innerHTML = `
    <div class="result-content">
      <div class="result-item">
        <div class="result-label">Decimal</div>
        <div class="result-value">${decimalValue}</div>
      </div>
      <div class="result-item">
        <div class="result-label">Binário</div>
        <div class="result-value">${binario}</div>
      </div>
      <div class="result-item">
        <div class="result-label">Hexadecimal</div>
        <div class="result-value">0x${hexadecimal}</div>
      </div>
    </div>
  `
}

// Adicionar evento de clique no botão
convertBtn.addEventListener("click", converter)

// Adicionar evento de Enter no campo de entrada
decimalInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    converter()
  }
})

decimalInput.addEventListener("input", () => {
  if (decimalInput.value.trim() === "") {
    resultDiv.innerHTML = ""
    limparErro()
  }
})
