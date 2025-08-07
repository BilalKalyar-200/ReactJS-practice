import style from "./buttons.module.css";
const Buttons = ({ onClick }) => {
  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "="];
  const oper = ["+", "-", "*", "/"];
  return (
    <div className={style.wrapper}>
      <div className={style.mainGrid}>
        {arr.map((val, index) => (
          <button
            key={index}
            className={style.buttonClass}
            onClick={() => onClick(val)}
          >
            {val}
          </button>
        ))}
      </div>
      <div className={style.operatorClass}>
        {oper.map((op, index) => (
          <button
            key={index}
            className={style.operatorButton}
            onClick={() => onClick(op)}
          >
            {op}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Buttons;
