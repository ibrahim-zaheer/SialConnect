// frontend/src/App.js
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '../src/routes/router'; // Import the router configuration

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
