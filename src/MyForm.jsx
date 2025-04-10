import React, { useState } from "react";

function MyForm() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    description: "",
    isStudent: false,
    country: "Morocco",
    status : "Student"
  });

  function handleCheckboxChanged(event) {
    setFormInputs({ ...formInputs, isStudent: event.target.checked });
  }

  return (
    <div className="flex justify-center items-center mt-6">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(formInputs);
        }}
        className="bg-gray-200 p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formInputs.name}
            onChange={(event) => {
              setFormInputs({ ...formInputs, name: event.target.value }); // spread syntax
              // let copyFormInputs = {...formInputs}; // make a copy of formInputs to avoid call by references because it is an object
              // copyFormInputs.name = event.target.value;
              // setFormInputs(copyFormInputs);
            }}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formInputs.email}
            onChange={(event) => {
              setFormInputs({ ...formInputs, email: event.target.value });
            }}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Description  textarea */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={formInputs.description}
            onChange={(event) => {
              setFormInputs({ ...formInputs, description: event.target.value });
            }}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your Description"
          />
        </div>

        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Are you Student
        </label>
        <input
          type="checkbox"
          checked={formInputs.isStudent}
          onChange={handleCheckboxChanged}
        />

        <label for="example" class="block text-sm font-medium text-gray-700">
          Select Country
        </label>
        <select
          value={formInputs.country}
          onChange={(event) => {setFormInputs({...formInputs,country: event.target.value})}}
          id="example"
          name="example"
          class="my-2 block w-full px-4 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="Morocco">Morocco</option>
          <option value="Saudia">Saudia</option>
          <option value="Japan">Japan</option>
        </select>

        <div class="my-3 flex items-center space-x-4">
    <label for="option1" class="inline-flex items-center space-x-2">
      <input type="radio" id="option1" name="status" value="Student" class="h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500" checked={formInputs.status == "Student"} onChange={(event) => {setFormInputs({...formInputs,status : event.target.value})}}/>
      <span class="text-gray-700">Student</span>
    </label>
    <label for="option2" class="inline-flex items-center space-x-2">
      <input type="radio" id="option2" name="status" value="Teacher" class="h-5 w-5 text-indigo-600 border-gray-300 focus:ring-indigo-500" checked={formInputs.status == "Teacher"} onChange={(event) => {setFormInputs({...formInputs,status : event.target.value})}} />
      <span class="text-gray-700">Teacher</span>
    </label>
  </div>

        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

//collect state in one object but the issue is we must add the new fields in every input we add
// function MyForm() {

//     const [formInputs,setFormInputs] = useState({name :"",email: ""});

//     return (
//       <div className="flex justify-center items-center mt-6">
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             console.log(formInputs);
//           }}
//           className="bg-gray-200 p-6 rounded-lg shadow-lg w-96"
//         >
//           <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

//           {/* Name Input */}
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formInputs.name}
//               onChange={(event) => setFormInputs({name: event.target.value , email : formInputs.email})}
//               className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your name"
//             />
//           </div>

//           {/* Email Input */}
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formInputs.email}
//               onChange={(event) => setFormInputs({email: event.target.value , name : formInputs.name})}
//               className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="mb-4">
//             <button
//               type="submit"
//               className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }

// function MyForm() {
//   let [name, setName] = useState("");
//   let [email, setEmail] = useState("");

//   return (
//     <div className="flex justify-center items-center mt-6">
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           console.log("Name:", name);
//           console.log("Email:", email);
//         }}
//         className="bg-gray-200 p-6 rounded-lg shadow-lg w-96"
//       >
//         <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

//         {/* Name Input */}
//         <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//             className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             placeholder="Enter your name"
//           />
//         </div>

//         {/* Email Input */}
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="mb-4">
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
export default MyForm;
