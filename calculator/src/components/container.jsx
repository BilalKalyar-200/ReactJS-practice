import style from "./container.module.css";
const Container = (props) => {
  return <div className={style.containerClass}>{props.children}</div>;
};
export default Container;
