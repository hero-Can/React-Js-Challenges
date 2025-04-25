
import './App.css'
import { Link } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom';  // Import Routes and Route
import About from './About';  // Import the About component
import Contact from './Contact';  
import Challenge from './challenge'; 
import Post from './Post';  
import TagButton from './TagButton';
import PropsChallenge from './PropsChallenge';
import StateTest from "./StateTest";
import MyForm from "./MyForm";
import Challenge3 from "./Challenge3";
import ToDoList from './ToDoList';
import ShoppingCart from './ShoppingCart';
import RequestTracker from './RequestTracker';
import LoanApplicationForm from './LoanApplicationForm';

function App() {
 
  return (
    <>
    
    <ul style={{ listStyleType: 'none', display: 'flex', justifyContent :'center' ,padding: 0 }}>
      <li style={{ marginRight: '10px' }}>
        <Link to="/about">About Us</Link>
      </li>
      <li style={{ marginRight: '10px' }}>
        <Link to="/contact">Contact</Link>
      </li>
      <li style={{ marginRight: '10px' }}>
        <Link to="/challenge">Challenge</Link>
      </li>
      <li style={{ marginRight: '10px' }}>
        <Link to="/propsChallenge">PropsChallenge</Link>
      </li>
      <li style={{ marginRight: '10px' }}>
        <Link to="/stateTest">StateTest</Link>
      </li>
      <li style={{ marginRight: '10px' }}>
        <Link to="/myForm">MyForm</Link>
      </li>
      <li style={{ marginRight: '10px' }}>
        <Link to="/challenge3">Challenge3</Link>
      </li>
      <li style={{ marginRight: '10px' }}>
        <Link to="/todolist">To-Do-List</Link>
      </li>
      <li style={{ marginRight: '10px' }}>
        <Link to="/shoppingCart">ShoppingCart</Link>
      </li>
      <li style={{ marginRight: '10px' }}>
        <Link to="/requestTracker">RequestTracker</Link>
      </li>
      <li style={{ marginRight: '10px' }}>
        <Link to="/loanApplicationForm">LoanApplicationForm</Link>
      </li>
    </ul>
     

      <Routes>
        <Route path="/about" element={<About />} />  {/* Define the route for About */}
        <Route path="/contact" element={<Contact />} />  {/* Define the route for About */}
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/propsChallenge" element={<PropsChallenge />} />
        <Route path="/stateTest" element={<StateTest />} />
        <Route path="/myForm" element={<MyForm />} />
        <Route path="/challenge3" element={<Challenge3 />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/requestTracker" element={<RequestTracker />} />
        <Route path="/loanApplicationForm" element={<LoanApplicationForm />} />
      </Routes>

    </>
  )
}

// function App() {
 
//   return (
//     <>
    
//     <ul style={{ listStyleType: 'none', display: 'flex', justifyContent :'center' ,padding: 0 }}>
//       <li style={{ marginRight: '10px' }}>
//         <Link to="/about">About Us</Link>
//       </li>
//       <li style={{ marginRight: '10px' }}>
//         <Link to="/contact">Contact</Link>
//       </li>
//       <li style={{ marginRight: '10px' }}>
//         <Link to="/challenge">Challenge</Link>
//       </li>
//       <li style={{ marginRight: '10px' }}>
//         <Link to="/propsChallenge">PropsChallenge</Link>
//       </li>
//     </ul>
//       <div className="bg-cyan-600 w-full h-[150px] flex justify-center items-center font-bold text-amber-50 text-4xl">Tarmeez Academy</div>
//       <div className="mt-5 flex gap-5 w-5xl mx-auto">
//         {/* Post section */}
//         <div className="w-2/3 flex flex-col gap-6 ">
//           <Post></Post>
//           <Post></Post>
//           <Post></Post>
//           <Post></Post>
//           <Post></Post>
//         </div>
//         {/* SideMenu section */}
//         <TagButton></TagButton>
        
//       </div>

//       <Routes>
//         <Route path="/about" element={<About />} />  {/* Define the route for About */}
//         <Route path="/contact" element={<Contact />} />  {/* Define the route for About */}
//         <Route path="/challenge" element={<Challenge />} />
//         <Route path="/propsChallenge" element={<PropsChallenge />} />
//       </Routes>

//     </>
//   )
// }




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
    
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>

//       <Link to="/about">About Us</Link>
//       <Link to="/contact">Contact</Link>
      
//       <h1>Vite + React</h1>
//       <h1 class="text-3xl font-bold underline bg-red-300 p-5">
//         Hello world!
//       </h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>

//       <Routes>
//         <Route path="/about" element={<About />} />  {/* Define the route for About */}
//         <Route path="/contact" element={<Contact />} />  {/* Define the route for About */}
//       </Routes>

    
//     </>
//   )
// }


export default App
