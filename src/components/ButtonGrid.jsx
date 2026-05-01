import Button from "./Button";

import { BUTTONS } from "../constants/calculator";

import { getButtonType } from "../utils/helpers";

function ButtonGrid({ onButtonClick, onClear, onErase }) {
  return (
    <>
      <div className="calc-erase">
        <button className="btn clear" onClick={onClear}>
          C
        </button>

        <button className="btn clear" onClick={onErase}>
          X
        </button>
      </div>

      <div className="calc-grid">
        {BUTTONS.flat().map((btn) => (
          <Button
            key={btn}
            label={btn}
            type={getButtonType(btn)}
            onClick={onButtonClick}
          />
        ))}
      </div>
    </>
  )
}

export default ButtonGrid