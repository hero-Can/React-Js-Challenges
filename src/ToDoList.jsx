import React, { useState } from "react";

function ToDoList() {
    let [inputValue,setInputValue] = useState("");
    const [notes, setNotes] = useState(["note 1", "note 2"]);
    let notesList = notes.map((note,index)=>{
        return (<li key={index}>{note} <button className="ml-2 bg-gray-400 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-semibold transition duration-200 my-1" onClick={() => {deleteNote(index)}}>X</button></li>)
    })

    function AddNote () {
        setNotes([...notes, inputValue]);
        // const copyNotes = [...notes];
        // copyNotes.push(inputValue)
        // setNotes(copyNotes)
        setInputValue("");
        }

    function handleInputValue(e) {
        setInputValue(e.target.value)
    }

    function deleteNote(index) {
      let copyNotes = [...notes];
      copyNotes.splice(index,1);
      setNotes(copyNotes);
      // console.log(index)
    }

  return (
    <div className="m-5">
      <h1 className="text-3xl font-bold underline bg-red-300 p-5">
        To Do List
      </h1>
      <div className="bg-red-100 mt-5 w-2xl mx-auto py-2">
        <ul>
          {notesList}
        </ul>
      </div>
      <div className="mt-5">
        <label> Add note : </label>
        <input
          type="text"
          placeholder="Enter text..."
          value={inputValue}
          onChange={handleInputValue}
          className="px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        />

        <button onClick={AddNote}  className="ml-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
          Click Me
        </button>
      </div>
    </div>
  );
}
export default ToDoList;
