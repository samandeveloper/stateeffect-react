import React from "react"

/**
 * Challenge:
 * 1. Create state called `windowWidth`, default to 
 *    `window.innerWidth`
 * 2. When the window width changes, update the state
 * 3. Display the window width in the h1 so it updates
 *    every time it changes
 */

export default function WindowTracker() {
    const[windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        window.addEventListener("resize", function(){
            console.log("resized")
            setWindowWidth(window.innerWidth)
        })
    },[])

    return (
        <h1> Window width: {windowWidth}</h1>  
    )
}
