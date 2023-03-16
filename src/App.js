// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React sini
//         </a>
//       </header>
//     </div>
//   );
// }

import Hello from "./components/Hello";
import "./App.css";
import World from "./components/World";

function App() {
  return (
    <div className="App">
      <Hello />
      <World />
    </div>
  );
}

export default App;
