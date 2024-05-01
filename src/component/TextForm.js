import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
       let UpperText=text.toLocaleUpperCase();
       setText(UpperText);
    }
    const handleLowClick =()=>{
        let UpperText=text.toLocaleLowerCase();
        setText(UpperText);
     }
    const handleonChange = (e)=>{
           setText(e.target.value)
    }
    const Capitalize = ()=>
    {
        let capitalizedText = text
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
  
      setText(capitalizedText);
    }
    const ClearText =()=>{
        let UpperText='';
        setText(UpperText);
     }
     const handleCopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
     }
     const handleExtraSpaces = () => {
        var cleanedText = text.trim().split(/\s+/).join(' ');
        setText(cleanedText);
      };
      
    
    var [text, setText] = useState("Enter Text Here");
  return (
    <>
    <div className='container'>
    
<div className="mb-3 my-3">
<h1>{props.heading}</h1>

  <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows="8"></textarea>
</div>
<button type="button" className="btn btn-primary mx-2"   onClick={handleUpClick}> Convert into Upper Case</button>
<button type="button" className="btn btn-primary mx-2"   onClick={handleLowClick}> Convert into Lower Case</button>
<button type="button" className="btn btn-primary mx-2"   onClick={Capitalize}> Capitalize Word</button>
<button type="button" className="btn btn-primary mx-2"   onClick={ClearText}> Clear Text</button>
<button type="button" className="btn btn-primary mx-2"   onClick={handleCopy}> Copy Text</button>
<button type="button" className="btn btn-primary mx-2"   onClick={handleExtraSpaces}>handleExtraSpaces</button>
    </div>
    <div className='container my-2'>
      <h2>
        Your Text Summary
      </h2>
      <p>
        {text.split(" ").length} words , {text.length} characters
      </p>
      <p>
        {0.008 * (text.split(" ").length)} Minimun time to read
      </p>

    </div>
    
    </>
  )
}
