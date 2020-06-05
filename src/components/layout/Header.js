import React from "react"
const headerStyle={
     color:'#000',
     textAlign:'center',
     paddingBottom:'10px'
}
export default function header(){
    return (
        <header style={headerStyle}>
            <h1>Search Your Movie</h1>
        </header>
    )
}