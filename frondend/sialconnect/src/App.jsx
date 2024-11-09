// frontend/src/App.js
import React from "react";
import Auth from "./components/Auth";
import OAuth from "./components/OAuth";

function App() {
  return (
    <div className="App">
      <Auth />
      <OAuth/>
    </div>
  );
}

export default App;
