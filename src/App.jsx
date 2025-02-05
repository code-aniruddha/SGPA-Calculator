import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Print from "./components/Print";
import Circle from "./components/Circle";
function App() {
  let [SGPA, setSGPA] = useState(0);
  return (
    <div className="Container">
      <Header></Header>
      {SGPA == 0 && <Content SGPA={SGPA} setSGPA={setSGPA}></Content>}
      {SGPA > 0 && <Circle SGPA={SGPA} />}
      {SGPA > 0 && <Print SGPA={SGPA} setSGPA={setSGPA}></Print>}
    </div>
  );
}

export default App;
