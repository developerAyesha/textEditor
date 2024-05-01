import React, {useState} from 'react'


import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';


function App() {
  const [Mode, setMode] = useState("light");
  const toggleMode=()=>{
    
    if(Mode==="light"){
          setMode("dark");
          document.body.style.backgroundColor="grey";
    }
    else{
            setMode("light");
            document.body.style.backgroundColor="white";
    }
  
  }

  return (
  
    <>
  
<Navbar title="TextTutil" mode={Mode} toggleMODE={toggleMode} />
<div className="container my-3">
<TextForm heading="Enter text to Analyze"/>
</div>

    </>
  );
}

export default App;
