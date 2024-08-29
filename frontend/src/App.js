import React from 'react';
import UserTable from './components/UserTable';
import SignUpForm from './components/SignUpForm';
import "./App.css";

function App() {
  return (
    <>
    
    <h1 className='Title'>User Management App</h1>
    <div className="App">
      
      <SignUpForm />
      <UserTable />
    </div>
    </>

  );
}

export default App;

