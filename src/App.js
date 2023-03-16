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
import "./index.css";
// import Hello from "./components/Hello";
// import World from "./components/World";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Sidebar2 from "./components/Sidebar2";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import $ from "jquery";
import Popper from "popper.js";

$(document).ready(function () {
  $(".dropdown-toggle").dropdown();
});

window.jQuery = $;
window.Popper = Popper;

function App() {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}

      <div class="row">
        <div ClassName="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-3">
          <MainContent />
        </div>
        <div className="col-md-3">
          <Sidebar2 />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
