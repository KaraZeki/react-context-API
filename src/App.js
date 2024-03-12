import "./App.css";
import Auth from "./Auth";

import authContext from "./Context/auth-context";
import { useState } from "react";


function App() {

  const [authStatus, setAuthStatus] = useState(false)
  const loginAuth =()=>{
    setAuthStatus(!authStatus)
  }


  return (
    <div className="App">
      <authContext.Provider value={{status:authStatus, login:loginAuth}}>
        <Auth></Auth>
        <button onClick={loginAuth}> Bide Burdan dene</button>
      </authContext.Provider>
    </div>
  );
}
export default App;
