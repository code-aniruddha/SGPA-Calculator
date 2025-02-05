import { useState, useRef, useEffect } from "react";
import CSS from "./Circle.module.css";
let Circle = ({ SGPA }) => {
  const [printSGPA, setPrintSGPA] = useState(0);
  const progressRef = useRef(null); // Ref to store the interval ID

  useEffect(() => {
    let startSGPA = 0;
    const endSGPA = SGPA;
    const speed = 1; // Adjust speed as needed

    // Clear any existing interval before starting a new one
    if (progressRef.current) {
      clearInterval(progressRef.current);
    }

    progressRef.current = setInterval(() => {
      if (startSGPA <= endSGPA) {
        setPrintSGPA(startSGPA);
        startSGPA += 0.01;
      } else {
        clearInterval(progressRef.current);
        progressRef.current = null; // Clear the ref
      }
    }, speed);

    // Cleanup function to clear the interval when the component unmounts or SGPA changes
    return () => {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [SGPA]); // Run effect whenever SGPA changes

  const progressCircle = {
    transtion: `all 1s linear`,
    backgroundImage: `conic-gradient(
      rgb(255, 0, 0) ${printSGPA * 36}deg,
      rgb(255, 255, 255) 0deg
    )`,
  };
  return (
    <div className={CSS.container}>
      <div className={CSS.progress} style={progressCircle}>
        <span className={CSS.value}>{parseFloat(printSGPA).toFixed(2)}</span>
      </div>
    </div>
  );
};
export default Circle;
