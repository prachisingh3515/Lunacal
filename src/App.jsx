import React from "react"
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import './App.css'

function App() {

  return (
   <div className="flex bg-[#2c2e31] h-screen w-screen">
    <div className="w-[836px] md:w-1/2"></div>
    <div className="flex flex-col md:w-1/2">
      <Component1/>
      <div class="horizontal-line"></div>
      <Component2/>
      <div class="horizontal-line"></div>

    </div>
   </div>
  )
}

export default App
