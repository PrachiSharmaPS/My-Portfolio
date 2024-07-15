import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import MyWork from './Components/Mywork/MyWork';
import Contact from './Components/Contact/Contect';

const App=()=>{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyWork/>
      <Contact/>

    </div>
  )

}

export default App