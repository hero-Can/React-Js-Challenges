import React, { useState } from "react";

function StateTest() {
    let [value, setValue] = useState("I am here");
    function handleInputChange(event) {
        setValue(event.target.value)
        console.log(event.target.value)
    }
   
  return (
    <div className="m-5">
      <h1 className="text-3xl font-bold underline bg-emerald-500 p-5 m-5">State Managment</h1>
     <label htmlFor="">Your Name :</label>
     <input type="text" className="border-2" onChange={handleInputChange}/>
     <div className="bg-amber-500 py-3 m-5">{value}</div>
    </div>
  );
}
export default StateTest;
