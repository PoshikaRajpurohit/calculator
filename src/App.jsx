import { useState } from 'react'
import CalculatorComp from './Components/Calci'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1>Calculator</h1>
      < div className="calci">
     <CalculatorComp/>
     {/* <ButtonComp/> */}
    </div>
   </>
  )
}

export default App
