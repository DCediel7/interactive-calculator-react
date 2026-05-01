import { useState } from "react"

import Display from "./components/Display"

import ButtonGrid from "./components/ButtonGrid"

import { calculate } from "./utils/calculate"

import { isOperator } from "./utils/helpers"

import { MAX_LENGTH } from "./constants/calculator"


function App() {
  const [input, setInput] = useState("")

  const handleButton = (value) => {

    if (input.startsWith("Error")) {
      if (!isOperator(value) && value !== "=") {
        setInput(value)
      }
      return
    }

    if (value === "=") {
      if (!input) return
      return setInput(calculate(input))
    }

    if (input.length >= MAX_LENGTH) return

    const lastChar = input.slice(-1)

    if (isOperator(value)) {

      if (!input && value !== "-") return

      if (isOperator(lastChar)) {
        return setInput((prev) => prev.slice(0, -1) + value)
      }
    }

    if (value === ".") {
      const currentNumber = input.split(/[+\-*/]/).at(-1)

      if (currentNumber.includes(".")) return
    }

    if (input === "0" && value === "0") return

    setInput((prev) => prev + value)
  }

  const handleClear = () => setInput("")

  const handleErase = () => {
    setInput((prev) => {
      if (prev.startsWith("Error") || prev.length <= 1) {
        return ""
      }

      return prev.slice(0, -1)
    })
  }

  return (
    <div className="calc-container">
      <Display value={input} />

      <ButtonGrid
        onButtonClick={handleButton}
        onClear={handleClear}
        onErase={handleErase}
      />
    </div>
  )
}

export default App