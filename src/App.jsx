import { useState } from "react";
import "./App.css";
import ColorPicker from "./components/colorPicker";

function App() {
   const [bgColor, setBgColor] = useState("#fff");

   return (
      <div
         className="App"
         style={{
            backgroundColor: bgColor,
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
         }}
      >
         <ColorPicker onColorChange={setBgColor} />
      </div>
   );
}

export default App;
