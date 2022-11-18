import logo from './logo.svg';
import './App.css';
import {Routes, Route,BrowserRouter} from "react-router-dom"; 
import SignUp from './signUp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         <div>adityavinyayk429999999911111</div>
        </a>
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route path = "/signup" element = {<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
