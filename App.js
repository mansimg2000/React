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


     const heading = React.createElement("div" , {id:"parent" , testId:"h1Tag"} ,
        [
            React.createElement("div" , {id:"child1" , testId:"h1Tag"} ,  
          [
            React.createElement("h1" , {} , "Hello i am h1 tag"),
            React.createElement("h2" , {} , "Hello i am h2 tag")
          ]
        ), 

        React.createElement("div" , {id:"child2" , testId:"h1Tag"} ,  
        [
            React.createElement("h1" , {} , "Hello i am h1 tag"),
            React.createElement("h2" , {} , "Hello i am h2 tag")
        ])
    ])

    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(heading)
