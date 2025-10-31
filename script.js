// Obter elementos do DOM
const decimalInput = document.getElementById("decimal-input")
const convertBtn = document.getElementById("convert-btn")
const resultDiv = document.getElementById("result")

// Função para converter o número
function converter() {
  // Obter o valor do campo de entrada
  const decimalValue = Number.parseInt(decimalInput.value)

  // Validar entrada
  if (isNaN(decimalValue)) {
    resultDiv.innerHTML = '<p style="color: #e74c3c;">Por favor, digite um número válido.</p>'
    return
  }

  // Converter decimal → binário
  const binario = decimalValue.toString(2)

  // Converter decimal → hexadecimal
  const hexadecimal = decimalValue.toString(16).toUpperCase()

  // Exibir os dois resultados na página
  resultDiv.innerHTML = `
    <div style="text-align: left; width: 100%;">
      <p style="margin-bottom: 10px; color: #2c3e50; font-weight: 600;">Decimal: ${decimalValue}</p>
      <p style="margin-bottom: 10px; color: #2c3e50;">Binário: ${binario}</p>
      <p style="color: #2c3e50;">Hexadecimal: ${hexadecimal}</p>
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
