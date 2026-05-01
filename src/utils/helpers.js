import { OPERATORS } from "../constants/calculator"

export const isOperator = (char) => OPERATORS.includes(char)

export const getButtonType = (value) => {
  if (value === "=") return "equal"
  if (isOperator(value)) return "op"
  return ""
}