import React, {useState} from 'react'

export default function Button(props) {
    const handleClear =()=>{
      props.setText("");
    }
    
    const handleUpCase =()=>{
      props.setText(props.text.toUpperCase());
    }
    
    const handleLoCase =()=>{
      props.setText(props.text.toLowerCase());
    }
    
    const handleCopy =()=>{
      navigator.clipboard.writeText(props.text);
    }

  return (
    <div>
        <button className="p-4 mr-3 rounded-3xl  text-white bg-emerald-500 hover:cursor-pointer hover:bg-emerald-400" onClick={handleLoCase} >Convert to Lowercase</button>
        <button className="p-4 mr-3 rounded-3xl  text-white bg-emerald-500 hover:cursor-pointer hover:bg-emerald-400" onClick={handleUpCase} >Convert to Uppercase</button>
        <button className="p-4 mr-3 rounded-3xl  text-white bg-emerald-500 hover:cursor-pointer hover:bg-emerald-400" onClick={handleCopy} >Copy Text</button>
        <button className="p-4 mr-3 rounded-3xl  text-white bg-emerald-500 hover:cursor-pointer hover:bg-emerald-400" onClick={handleClear} >Clear Text</button>
    </div>
  )
}
