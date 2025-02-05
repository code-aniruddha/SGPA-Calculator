import { useRef, useState } from "react";
import CSS from "./Content.module.css";
let Content = ({ SGPA, setSGPA }) => {
  let EcT = useRef(0);
  let EcP = useRef(0);
  let AaT = useRef(0);
  let PsucT = useRef(0);
  let PsucP = useRef(0);
  let BeeT = useRef(0);
  let BeeP = useRef(0);
  let CsT = useRef(0);
  let CsP = useRef(0);
  let Wdt = useRef(0);
  let Cc = useRef(0);
  let handleSubmit = () => {
    let ECP = EcT.current.value;
    let ECT = EcP.current.value;
    let AA = AaT.current.value;
    let PSUCT = PsucT.current.value;
    let PSUCP = PsucP.current.value;
    let BEET = BeeT.current.value;
    let BEEP = BeeP.current.value;
    let CST = CsT.current.value;
    let CSP = CsP.current.value;
    let WDT = Wdt.current.value;
    let CC = Cc.current.value;
    let cgpa = eval(
      `((((${ECP}*2) + (${AA}*3) + (${PSUCT} * 3) + (${BEET} * 3) + (${WDT} * 2) + (${CC} * 2))/10) + ((${ECT}+${PSUCP}+${BEEP}+${CST}+${CSP}))/5)/20`
    );
    console.log(cgpa);
    setSGPA(cgpa);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <table class={`${CSS.table} table-striped`}>
        <thead>
          <tr className="bg-transparent">
            <th scope="col">Serial No.</th>
            <th scope="col">Subject</th>
            <th scope="col">Obtained Marks</th>
            <th scope="col">Out Of Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Essential Of Chemistry</td>
            <td>
              <input
                type="number"
                className={CSS.input}
                min={0}
                max={100}
                ref={EcT}
              />
            </td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Essential Of Chemistry Lab</td>
            <td>
              <input
                type="number"
                className={CSS.input}
                min={0}
                max={50}
                ref={EcP}
              />
            </td>
            <td>50</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Applied Algebra</td>
            <td>
              <input
                type="number"
                className={CSS.input}
                min={0}
                max={100}
                ref={AaT}
              />
            </td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Problem Solving Using C</td>
            <td>
              <input
                type="number"
                className={CSS.input}
                min={0}
                max={100}
                ref={PsucT}
              />
            </td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Problem Solving Using C Lab</td>
            <td>
              <input
                type="number"
                className={CSS.input}
                min={0}
                max={50}
                ref={PsucP}
              />
            </td>
            <td>50</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Basic Of Electronic Engineering</td>
            <td>
              <input
                type="number"
                className={CSS.input}
                min={0}
                max={100}
                ref={BeeT}
              />
            </td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Basic Of Electronic Engineering Lab</td>
            <td>
              <input
                type="number"
                className={CSS.input}
                min={0}
                max={50}
                ref={BeeP}
              />
            </td>
            <td>50</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Communication Skills</td>
            <td>
              <input
                type="number"
                className={CSS.input}
                min={0}
                max={50}
                ref={CsT}
              />
            </td>
            <td>50</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Communication Skills Lab</td>
            <td>
              <input
                type="number"
                className={CSS.input}
                min={0}
                max={50}
                ref={CsP}
              />
            </td>
            <td>50</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Web Design Technology</td>
            <td>
              <input
                type="number"
                className={CSS.input}
                min={0}
                max={100}
                ref={Wdt}
              />
            </td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>Co-Cultural (Sport/Cultural)</td>
            <td>
              <input
                type="number"
                className={CSS.input}
                min={0}
                max={100}
                ref={Cc}
              />
            </td>
            <td>100</td>
          </tr>
        </tbody>
        <tr>
          <td colSpan={4}>
            <button type="submit" className={CSS.submitBtn}>
              Submit
            </button>
          </td>
        </tr>
      </table>
    </form>
  );
};
export default Content;
