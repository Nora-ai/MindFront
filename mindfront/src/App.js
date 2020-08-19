import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { verifyUser } from './services/auth'


function App() {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
      handleVerify()
    }, [])

    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }

  return (<>
  <Header 
    currentUser={currentUser}
    setCurrentUser={setCurrentUser}
  />
  <Main 
    currentUser={currentUser}
    setCurrentUser={setCurrentUser}
    />
  </>);
}

export default App;
