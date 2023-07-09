"use client"
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";


export default function Home() {

  const [text, setText] = useState("");

  const handleOnChange =(event)=>{
    setText(event.target.value);
  }
  //console.log(text);
  
  return (
  <>
    <body>
      <nav className="bg-emerald-500">
        <ul className="flex ">
          <img src="" alt="" />
          <h1 className="m-4 pr-6 text-yellow-100 text-xl font-bold">TextUtils</h1>
          <Link href="/"><li className="m-4 text-emerald-100 hover: cursor-pointer hover:text-white ">Home</li></Link>
          <Link href='/about'><li className="m-4 text-emerald-100 hover: cursor-pointer hover:text-white ">About</li></Link>
        </ul>
      </nav>
      <div className="pl-[400px] mt-8">
        
        <div><h1 className="font-serif text-4xl text-emerald-600">Enter the text to analyze:</h1></div>
        <div>
        <form className="mt-4">
          <textarea name="text" cols="75" rows="6" placeholder="Enter any text..." type="text" value={text} onChange={handleOnChange} className="text-lg p-3 border border-blue-400 placeholder:italic" ></textarea>
        </form>
        </div>
        <div className="mt-3">
          <Button text={text} setText={setText}/>
        </div>
      </div>  
    </body>
  </>
    
  )
}
