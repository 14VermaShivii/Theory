import { useState } from "react";

export default function useCount(initialval=0){
    const [count,setCount]=useState(initialval)
    function Increament() {
        setCount(count+1)
    }
    function Decreament() {
        setCount(count-1)
    }
    return[count,Increament,Decreament]
}