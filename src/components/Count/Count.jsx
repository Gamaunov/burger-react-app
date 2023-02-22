import style from "./Count.module.css";

const Count = (props) => (
  <div className={style.count}>
    <button className={style.minus}>-</button>
    <p className={style.amount}>{props.count}</p>
    <button className={style.plus}>+</button>
  </div>
);

export default Count;
