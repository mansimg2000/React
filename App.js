    
   import React from "react"
   import ReactDOM from 'react-dom/client'
  

   const heading  =  (
   <h1> this is React Element</h1>
   ) 

   const Title = () =>(
    <h1>This is React Componnet</h1>
   )

   const HeadingComponent = () =>(
    <div className="container">
    <Title/>
    <h1>This React Funtional Component</h1>
    </div>
   )

   const root = ReactDOM.createRoot(document.getElementById("root"))
   root.render(<HeadingComponent/>)


   
