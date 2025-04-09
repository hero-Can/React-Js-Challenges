import React, { useState } from "react";

function MyForm() {
   
    const [formInputs,setFormInputs] = useState({name :"",email: "",description:"",isStudent: false});

    function handleCheckboxChanged(event){
      setFormInputs({...formInputs,isStudent: event.target.checked});
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
               setFormInputs({...formInputs,name: event.target.value});
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
                setFormInputs({...formInputs,email: event.target.value});
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
                setFormInputs({...formInputs,description: event.target.value});
              }}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your Description"
            />
              
          </div>
  
          <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >Are you Student
            </label>
          <input type="checkbox" checked={formInputs.isStudent} onChange={handleCheckboxChanged}/>
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
