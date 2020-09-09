import React from "react";
import Navigation from "./Component/Navigation";
import "./App.css";
import { PinProvider } from "./Component/Context";
import FullWidthGrid from "./Component/User";

const App = () => {
  return (
    <div className="App">

      <>
  <FullWidthGrid/>  
      {/* <PinProvider>
        <Navigation />
      </PinProvider> */}
      </>     
      
      
    </div>
  );
};

export default App;
