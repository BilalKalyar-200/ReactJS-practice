import { useState, useEffect } from "react";
import style from "./App.module.css";
import Displayer from "./components/calculator.jsx";
import Buttons from "./components/buttons.jsx";
import Container from "./components/container.jsx";
const sound_on_equal = () => {
  const audio = new Audio("./public/sound.wav");
  audio.play();
};

function App() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      setInput(eval(input).toString());
      sound_on_equal();
    } else {
      setInput((prev) => prev + value);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      if (e.key === "Enter") {
        handleButtonClick("=");
      } else if (e.key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key.toLowerCase() === "c") {
        handleButtonClick("C");
      } else if ("0123456789+-*/".includes(e.key)) {
        handleButtonClick(e.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input]);

  return (
    <Container>
      <h1 className={style.CalHeading}>My React Calculator</h1>
      <div className="calc-container">
        <Displayer input={input} />
        <Buttons onClick={handleButtonClick} />
      </div>
    </Container>
  );
}

export default App;
