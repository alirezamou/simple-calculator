import { useState } from "react";
import calculate from "./logic/calculate"
import Display from "./component/Display";
import ButtonPanel from "./component/ButtonPanel";

export default function Calculator () {
  const [calculatorState, setCalculatorState] = useState({total: null, next: null, operation: null})

  const handleClick = (target) => {
    setCalculatorState(calculate(calculatorState, target));
  }

  return (
    <div className="component-calculator">
      <Display
        text={calculatorState.next || calculatorState.total || "0"}
      />
      <ButtonPanel
        onClick={handleClick}
      />
    </div>
  );
}
