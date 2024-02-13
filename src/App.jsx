import { useEffect, useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { List } from './List';
import { Readmore } from './Readmore'
import { Comp1 } from './Components/Comp1';
import { MyComponent } from './Components/MyComponent';
import { MyContext } from './Components/MyContext';
import { Comp4 } from './Components/Comp4';
import { OtherContext } from './Components/OtherContext';
import {Comp2 } from './Components/Comp2';
import {Comp3 } from './Components/Comp3';
import { Counter1 } from './Components/Counter1';
import { Counter2 } from './Components/Counter2';
import useTheme from './Hooks/useTheme';


function App() {
  const [count, setCount] = useState(0)
  const [Name, setName] = useState("Shivani")
  const [text,setText]=useState("Login")
  const refInput = useRef()
  const {theme,switchTheme}=useTheme()
  useEffect(()=>{
    document.body.style.backgroundColor=theme
  })

function changecolor() {
  refInput.current.style.backgroundColor="skyblue"  
}
function reset() {
  setText(" ")
  refInput.current.focus()
}



  const [isVisible, setVisible] = useState(true)
  const [isDisabled, setDisabled] = useState(true)
  useEffect(() => {
    console.log(count)
    if (count > 4) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  })

  const [stop, setstop] = useState(true)
  useEffect(() => {
    console.log(count)
    if (count < 1) {
      setstop(false)
    } else {
      setstop(true)
    }
  })
  console.log(count)
    
  return (
    <>
<input type= "text" ref={refInput} value={text} onChange={(e)=> setText(e.target.value)}/>
<button onClick={changecolor}>changecolor</button>
<button onClick={reset}>Reset</button>
<button type="button" onClick={switchTheme}>switchTheme</button>

<Counter1 />
<Counter2 />
<useTheme />

    <MyContext.Provider value={{text,setText}}>
      <Comp1 />
<Comp4 />
    </MyContext.Provider>

<OtherContext.Provider value={{data:"here is a othercontext page"}}>
  <Comp2 />
  <Comp3 />
</OtherContext.Provider>


      {/* <Comp1 text="john" /> */}

      {/* const [text ,SetText]=useState() */}
      {/* <MyContext.Provider value={{ text, SetText }}>
        <MyComponent />
      </MyContext.Provider> */}

      {/* <List name="sam" age="20"/>
   <List name="shivii" age="14"/>
   <List name="niyu"/>
   <List name="payu"/>
  <List name="riyu"/> */}
      {/* 7-jan */}
      {/* <p>value is {count}</p>
      <button disabled={!isDisabled} onClick={() => setCount(count + 1)}>increment</button>:
      <button disabled={!stop} onClick={() => setCount(count -1)}>decreament</button> */}
      {/* <button onClick={() => setCount(count + 1 * 3)}>3 table</button>
      <button onMouseOver={() => setCount(count + 1 * 100)}>increament number</button>
      <p>My Name is {Name} </p>
      <button onClick={() => setCount(count - 1)}>decreament</button>
      <button onClick={() => setName("shivi verma")}>Append Name</button> */}

      {/* <button onClick={() => setVisible(!isVisible)}>show/hide</button> */}

      {/* 8-janauary */}
      {/* {isVisible ? <Readmore text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry standard dummy text ever since the  when an unknown 
  printer took a galley of type and scrambled it to make a type specimen book It has survived 
  not only five centuries but also the leap into electronic typesetting remaining essentially
   unchanged It was popularised in the with the release of Letraset sheets containing Lorem 
   Ipsum passages and morerecently with desktop publishing software like Aldus PageMaker including
    versions of Lorem Ipsum`} maxelength={35} /> : < > </>}  */}
    </>
  )
}


export default App
