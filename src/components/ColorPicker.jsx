import React from "react";

const ColorPicker = ({ onColorChange }) => {
   return (
      <div>
         <h1>Alege culoarea</h1>
         <input
            type="color"
            onChange={(e) => onColorChange(e.target.value)}
            className="form-control form-control-xs w-25 p-1"
         />
      </div>
   );
};

export default ColorPicker;
