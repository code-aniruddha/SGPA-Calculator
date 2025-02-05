import logo from "../assets/react.svg";
import CSS from "./Header.module.css";
let Header = () => {
  return (
    <header className={CSS.out}>
      <h1 className={CSS.head}>Semester 1 SGPA Calculator</h1>
      <h3 className={CSS.subhead}>
        Using React <img src={logo} alt="" />
      </h3>
    </header>
  );
};
export default Header;
