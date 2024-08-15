import React, { useState } from 'react'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import Footer from './components/Footer';
import JobSeekers from './components/JobSeekers';
import Employer from './components/Employer';
import Explore from './components/Explore';
import ContactUs from './components/ContactUs';



function App() {

  const [showSignIn, setShowSignIn] = useState(true)
  return (
    <>
      <Nav />
      <div>
        {showSignIn ? (
          <SignIn onClick={() => setShowSignIn(false)} />
        ) : (
          <SignUp onClick={() => setShowSignIn(true)} />
        )}
      </div>
      <JobSeekers />
      <Employer />
      <Explore />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App