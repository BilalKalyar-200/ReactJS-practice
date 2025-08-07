import style from "./calculator.module.css";

const Displayer = ({ input }) => {
  return (
    <div className={style.wrapper}>
      <input
        className={style.calculatorclass}
        type="text"
        placeholder="Enter equation"
        value={input}
        readOnly
      />
    </div>
  );
};

export default Displayer;
