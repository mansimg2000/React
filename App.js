    
   import React from "react"
   import ReactDOM from 'react-dom/client'
   /** 
     * <div id"parent">
     *    <div id"child1">
     *        <h1>Hello i am react child </h1>
     *        <h2>Hello i am react child </h2>
     *    </div>
     *    <div id"child2">
     *        <h1>Hello i am react child </h1>
     *        <h2>Hello i am react child </h2>
     *    </div>
     * </div>
     * 
     * 
    */
    
    
    // const heading = React.createElement("h1" , {id:"heading" , testId:"h1Tag"} , "Hello World from React")
    // const root = ReactDOM.createRoot(document.getElementById("root"))
    // root.render(heading)


     const heading = React.createElement("div" , {id:"parent" } ,
        [
            React.createElement("div" , {id:"child1" , key:"43673"} ,  
          [
            React.createElement("h1" , {key:"432673"} , "Hello i am h1 tagghhj"),
            React.createElement("h2" , {key:"436730"} , "Hello i am h2 tag")
          ]
        ), 

        React.createElement("div" , {id:"child2" , key:"010"} ,  
        [
            React.createElement("h1" , {key:"436673"} , "Hello i am h1 tag"),
            React.createElement("h2" , {key:"4364673"} , "Hello i am h2 tag")
        ])
    ])

    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(heading)
