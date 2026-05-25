import { useState } from 'react'
import { ControlledForm } from "./components/P1";
import { ValidationForm } from "./components/P2";
import { AsyncForm } from "./components/P3";
import './App.css'

function App() {

  return (
    <>
      {/* <ControlledForm/> */}
      {/* <ValidationForm/> */}
      <AsyncForm/>
    </>
  )
}

export default App
