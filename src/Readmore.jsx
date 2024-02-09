import React,{useState } from "react";
export function Readmore(props) {
    const [hidden , Sethidden]=useState(true)
    const {text, maxelength} = props
    return <span>
        {hidden? `${text.substr(0,maxelength).trim()}...`:text}
        {hidden?(
            <a onClick={()=>Sethidden(false)}>Readmore</a>
        ):
        (<a onClick={()=>Sethidden(true)}>Readless</a>
    )}
    </span>
}