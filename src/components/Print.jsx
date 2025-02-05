import CSS from "./Print.module.css";
let Print = ({ SGPA, setSGPA }) => {
  const Clear = () => {
    setSGPA(0);
  };
  return (
    <div className={CSS.outbox}>
      <h1 className={CSS.heading}>
        Your SGPA is {parseFloat(SGPA).toFixed(3)} ✨
      </h1>
      <button className={CSS.btn} onClick={Clear}>
        Recalculate
      </button>
    </div>
  );
};
export default Print;
