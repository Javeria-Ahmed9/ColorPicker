import { useState } from "react";

export function ColorPicker() {
  const [val, setVal] = useState("#000000");
  let myf = (event) => {
    setVal(event.target.value);
  };
  return (
    <div className="container text-center border" id="one">
      <div id="two" className="container">
        <h3>Color Picker App</h3>
        <p style={{ backgroundColor: val }}>Selected color {val} : </p>
        <h4>Select a color</h4>
        <input type="color" value={val} onChange={myf} />
      </div>
    </div>
  );
}
