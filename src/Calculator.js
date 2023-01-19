import { useState } from "react";

const Calculator = () => {
  const initData = {
    num: 0,
    sign: "",
    result: 0,
  };
  const [data, setData] = useState(initData);

  const buttons = [
    [7, 8, 9, "+"],
    [4, 5, 6, "-"],
    [1, 2, 3, "x"],
    [0, "=", "AC", "/"],
  ];

  const calc = () => {
    let result = 0;
    if (data.sign) {
      switch (data.sign) {
        case "+":
          result = data.result + data.num;
          break;
        case "-":
          result = data.result - data.num;
          break;
        case "x":
          result = data.result * data.num;
          break;
        case "/":
          result = data.result / data.num;
          break;
        default:
          break;
      }
    } else {
      result = data.num;
    }
    return result;
  };

  const onClick = (btn) => {
    if (isNaN(btn)) {
      if (btn === "AC") {
        setData(initData);
      } else if (btn === "=") {
        const result = calc();
        setData({ result, sign: "", num: result });
      } else {
        setData({ result: calc(), sign: btn, num: 0 });
      }
    } else {
      setData({ ...data, num: data.num * 10 + btn });
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="display-panel">{`${data.result} ${data.sign}`}</div>
        <input value={data.num} readOnly />
      </div>
      {buttons.map((row, index) => (
        <div key={`${index}`} className="row">
          {row.map((btn, index) => (
            <button key={`${index}`} onClick={() => onClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calculator;
