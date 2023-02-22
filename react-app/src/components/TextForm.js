import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked : " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleClearClick = () => {
     
        let newText = '';
        setText(newText);
        props.showAlert("Clear text is successfully!", "success");
    }
    
    // use handleOnChange function because already defined value = {text} in textarea
    const handleOnChange = (event) => {
        // console.log("On Change ");
        setText(event.target.value);
        
    }

    const handleCopy = () => {

        console.log ("I am copy to textarea.")
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copy successfully", "success");

    } 
    
    const handleRemoveExtraSpaces = () => {

        console.log("I am removing extra spaces");
        let newText = document.getElementById("myBox");
        newText = text.split(/[ ] + /);
        setText(newText.join(" "));
        props.showAlert("Removed extra space is successfully!", "success");
    }


    

    // create a new state (here text is a state)
    // use of useState is making a state variable
    // setText is a function for changing(update) the state's value
    // here "Enter text here..." is a value of text state variable

    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state
    // setText("new text here"); // correct way to change the state
    return (
     <>   
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading} </h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} 
                  style={{backgroundColor:props.mode==='dark'?'#495057':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleCopy}>Copy To Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words, <b>{text.length}</b> characters </p>
            <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length }</b> Minutes read  </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
     </>   
    );
}
