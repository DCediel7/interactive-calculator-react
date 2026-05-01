export const calculate = (expression) => {
  try {
    if (/\/0(?!\d)/.test(expression)) {
      return "Error"
    }

    const result = Function(
      `"use strict"; return (${expression})`
    )()

    if (!isFinite(result) || isNaN(result)) {
      return "Error"
    }

    return parseFloat(result.toFixed(10)).toString()

  } catch {
    return "Error"
  }
}