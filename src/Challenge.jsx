import React, { useState } from "react";

function Challenge() {
    let state = useState("Ahmed"); // [useState Hook, f()]
    let value = state[0]; // value just for reading
    let setValue = state[1]; // function for writing 

    function ChangeText(){
        if (value == "Ahmed") {
            setValue("Sara");
        }else{
            setValue("Ahmed");
        }
        
    }

  return (
    <div className="m-5">
      <h1 className="text-3xl font-bold underline bg-fuchsia-500 p-5">
        {value}
      </h1>
      <button class="m-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={ChangeText}>
        Click Me
      </button>
    </div>
  );
}
export default Challenge;
