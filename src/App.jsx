import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {List} from './List';
import {Readmore} from './Readmore'
function App() {
  const [count, setCount] = useState(0)
  const [Name,setName]=useState("Shivani")
// console.log(count)

  return (
    <>
   {/* <List name="sam" age="20"/>
   <List name="shivii" age="14"/>
   <List name="niyu"/>
   <List name="payu"/>
   <List name="riyu"/> */}
   {/* 7-jan */}
   {/* <p>value is { count }</p>
   <button onClick={()=>setCount(count+1)}>increment</button>
   <button onClick={()=>setCount(count-1)}>decreament</button>
   <button onClick={()=>setCount(count+1*3)}>3 table</button>
   <button onMouseOver={()=>setCount(count+1*100)}>increament number</button>
   <p>My Name is {Name} </p>
   <button onClick={()=>setCount(count-1)}>decreament</button>
   <button onClick={()=>setName("shivi verma")}>Append Name</button> */}
 {/* 8-janauary */}
 < Readmore text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown 
  printer took a galley of type and scrambled it to make a type specimen book It has survived 
  not only five centuries but also the leap into electronic typesetting remaining essentially
   unchanged It was popularised in the with the release of Letraset sheets containing Lorem 
   Ipsum passages and morerecently with desktop publishing software like Aldus PageMaker including
    versions of Lorem Ipsum`} maxelength={35} />
    </>
  )
}

export default App
