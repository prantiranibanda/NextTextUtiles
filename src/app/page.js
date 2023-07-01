export default function Home() {
  return (
  <>
    <body>
      <nav className="bg-violet-600">
        <ul className="flex ">
          <img src="" alt="" />
          <h1 className="m-4 pr-6 text-white text-xl font-bold">TextUtils</h1>
          <li className="m-4 text-white hover: cursor-pointer hover:text-purple-400">Home</li>
          <li className="m-4 text-white hover: cursor-pointer hover:text-purple-400">About</li>
        </ul>
      </nav>
      <div className="pl-[400px] mt-8">
        
        <div><h1 className="font-serif text-4xl text-violet-800">Enter the text to analyze:</h1></div>
        <div>
        <form className="mt-4">
          <textarea name="text" id="text" cols="75" rows="6" placeholder="Enter any text..." type="text" className="text-lg placeholder:italic " ></textarea>
        </form>
        </div>
        <div className="mt-3">
          <button className="p-4 mr-3 rounded-3xl border-violet-900 text-white bg-violet-800 hover:cursor-pointer hover:bg-violet-700">Convert to Uppercase</button>
          <button className="p-4 mr-3 rounded-3xl border-violet-900 text-white bg-violet-800 hover:cursor-pointer hover:bg-violet-700">Convert to Lowercase</button>
          <button className="p-4 mr-3 rounded-3xl border-violet-900 text-white bg-violet-800 hover:cursor-pointer hover:bg-violet-700">Copy Text</button>
          <button className="p-4 mr-3 rounded-3xl border-violet-900 text-white bg-violet-800 hover:cursor-pointer hover:bg-violet-700">Clear Text</button>
        </div>
      </div>  
    </body>
  </>
    
  )
}
