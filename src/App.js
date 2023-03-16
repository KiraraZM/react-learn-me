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
import "./App.css";
// import Hello from "./components/Hello";
// import World from "./components/World";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />

      <div class="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <MainContent />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
