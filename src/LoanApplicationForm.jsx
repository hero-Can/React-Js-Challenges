import { useState } from "react"

export default function LoanApplicationForm(){

    const [user,setUser] = useState({
        name : "",
        phone : "",
        age : "",
        isEmploye : false,
        salary : ""
    })

    const [modalMessage, setModalMessage] = useState(""); // State for dynamic message
    const [colorMessage, setColorMessage] = useState(""); // State for dynamic message
   

    function handleName(event){
        setUser({...user,name : event.target.value})
    }
    function handlePhone(event){
        setUser({...user,phone : event.target.value})
    }
    function handleAge(event){
        setUser({...user,age : event.target.value})
    }
    function handleIsEmploye(event){
        setUser({...user,isEmploye : event.target.checked})
    }
    function handleSalary(event){
        setUser({...user,salary : event.target.value})
    }

    
    function handleSubmit(){
        if (user.name =="" || user.name == null) {
            setIsModalOpen(true); // Open modal
            setModalMessage("name not valid")
            setColorMessage("text-red-500")
        }
        else if (parseInt(user.age) < 18 || parseInt(user.age) > 100) {
            setIsModalOpen(true); // Open modal
            setModalMessage("Age not valid")
            setColorMessage("text-red-500")
        }
        
        else {
            setIsModalOpen(true); // Open modal
            setModalMessage("Form submitted successfully!")
            setColorMessage("text-green-500")
        }
        console.log("clicked")
        // setIsModalOpen(true); // Open modal
        
    }

 // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle modal close action
  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

    // Modal component
//   const modal = () => {
//     return (
//       <div className="fixed inset-0 bg-[#b5b3b9ae] flex justify-center items-center z-50">
//         <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//           <h2 className="text-2xl font-semibold text-green-600 mb-4">Important Note</h2>
//           <p className="text-gray-700 mb-6">This is your important note content!</p>
//           <button
//             onClick={closeModal}
//             className="py-2 px-6 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   };

  function modal(msg,color) {
    return (
        <div className="fixed inset-0 bg-[#b5b3b9ae] flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Important Note</h2>
            <p className={`text-2xl font-semibold mb-4 ${color}`}>{msg}</p>
            <button
              onClick={closeModal}
              className="py-2 px-6 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      );
  }

  let disabeld = user.name == "" || user.age == "" || user.phone== "";

 return (
 <>
 <div className="bg-gray-200 flex justify-center items-center h-screen mt-5">
    <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Employee Information Form</h2>
        
        <form onSubmit={(event) => {
          event.preventDefault();
          console.log(user);
        }}>
            
            <div className="mb-4">
                <label for="name" className="block text-sm font-semibold text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" value={user.name} required onChange={handleName}></input>
            </div>

            
            <div className="mb-4">
                <label for="phone" className="block text-sm font-semibold text-gray-700">Phone</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" value={user.phone} onChange={handlePhone} required></input>
            </div>

            
            <div className="mb-4">
                <label for="age" className="block text-sm font-semibold text-gray-700">Age</label>
                <input type="number" id="age" name="age" className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" value={user.age} onChange={handleAge} required></input>
            </div>

            
            <div className="mb-4 flex items-center">
                <input type="checkbox" id="employee" name="employee" className="h-4 w-4 text-indigo-600 focus:ring-0 border-gray-300 rounded" checked={user.isEmploye} onChange={handleIsEmploye} />
                <label for="employee" className="ml-2 text-sm font-semibold text-gray-700">Are you an employee?</label>
            </div>

            
            <div className="mb-4">
                <label for="salary" className="block text-sm font-semibold text-gray-700">Salary</label>
                <select id="salary" name="salary" className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" value={user.salary} onChange={handleSalary}>
                    <option value="0-20k">0 - 20k</option>
                    <option value="20k-50k">20k - 50k</option>
                    <option value="50k-100k">50k - 100k</option>
                    <option value="100k+">100k+</option>
                </select>
            </div>

            
            <div className="mt-6">
                <button type="submit" className={disabeld ? `w-full py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50`: `w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50`} onClick={handleSubmit} disabled={disabeld}>Submit</button>
            </div>
            {/* Render the modal when isModalOpen is true */}
            {isModalOpen && modal(modalMessage,colorMessage)}
        </form>
    </div>
</div>
 
 
 </>)
}