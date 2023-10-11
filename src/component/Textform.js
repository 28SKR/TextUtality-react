import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpclick= ()=>{
        //console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowclick= ()=>{
        //console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleOnChange = (event)=>{
       // console.log("On change");
        setText(event.target.value);
    }
    const handleClearclick = (event)=>{
       // console.log("On change");
        let newText = '';
        setText(newText);
        props.showAlert("Text Clear!","success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard!","success");
    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed!","success");
    }

    const [text, setText] =useState('');
   // text="new text"wrong way to change text
   // setText("new text"); //right way to change text
  return (
   <>
    <div className='container'  style={{Color:props.mode==='dark'?'white':'black'}} >
       
       
       <h1>{props.heading}  </h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#d7a8a852':'white',Color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-1" onClick={handleUpclick}>convert to uppercase</button>
       <button className="btn btn-primary mx-1" onClick={handleLowclick}>convert to lowercase</button>
       <button className="btn btn-primary mx-1" onClick={handleClearclick}>clear</button>
       <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

 
    </div>

    <div className="container my-3" style={{Color:props.mode==='dark'?'white':'black'}}>
        <h2>Your summary</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length }Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
