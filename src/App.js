import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; // Import Navbar component
import Loader from './components/Loader'; // Import the Loader component
import Footer from './components/Footer'; // Import the Footer component 
import Hero from './components/Hero'; //Import the Hero component
import Skills from './components/Skills'; //Import the Skills component
import './App.css'
import Experience from './components/Experience';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 3 seconds, hide loader
    }, 3000); // Adjust the time as needed

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <>
          <Navbar/> {/* Show Navbar after loading completes */}
          <Hero /> {/* Include Hero below the Navbar */}
          <Skills /> {/* Include Skills below the About */}
          <Experience /> {/* Include Experience below the Skills */}
          <Footer/> {/* Include Footer below the Section */}
        </>
      )}
    </div>
  );
}

export default App;
