  // import React from 'react';
  // import Login from './pages/Login';
  // import LoginPage from './pages/Loginpage';
  // import ApplicationDetails from './pages/ApplicationDetails';
  // import './App.css';

  // function App() {
  //   return (
  //     <div>
  //       <Login />
  //       {/* <LoginPage /> */}
  //       {/* <ApplicationDetails /> */}
  //     </div>
  //   );
  // }

  // export default App;

  import React from 'react';
  import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';

export default function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/dashboard"  element={<Dashboard/>} />
     
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(<App />);