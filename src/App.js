import React from 'react'
import AuthProvider from './auth/AuthProvider';

import AppRouter from './routers/AppRouter';
import './App.css';

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>

    </div>
  );
}

export default App;
