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
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} 
                  style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-info mx-2" onClick={handleCopy}>Copy To Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p><b>{text.split(" ").length}</b> words, <b>{text.length}</b> characters </p>
            <p><b>{0.008 * text.split(" ").length }</b> Minutes read  </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here......"}</p>
        </div>
     </>   
    );
}
