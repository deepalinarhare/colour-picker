import React, { useState } from "react";

function Selection({applyColor}){
    const [color, setColor] = useState({background:''})
    console.log(color)
    return <div className="fix-box" style={color} onClick={()=>applyColor(setColor)}>
        <h2 className="subheading">Selection</h2>
    </div>
}

export default Selection;