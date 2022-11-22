import React from 'react';
import appRouter from 'routers';
import AuthProvider from 'providers/AuthProvider';

import { RouterProvider } from "react-router-dom";


function App() {

  return (
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  );
}

export default App;
