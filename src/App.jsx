import { Suspense } from "react"
import Bottols from "./component/bottols/Bottols"

function App() {

  const bottolsPromise=fetch("bottols.json").then(res=>res.json())
  

  return (

    <>
    <h1>Buy Awesome Bottles </h1> 
    <Suspense fallback={<h2> Bottles are comming..... </h2>}>

      <Bottols bottolsPromise={bottolsPromise}>

      </Bottols>
    </Suspense>

     
    </>
  )
}

export default App
