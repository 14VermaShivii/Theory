import { useContext } from 'react'
import { MyContext } from './MyContext';

export function Comp4() {
    const {text,setText}=useContext(MyContext)
    console.log(MyContext)
    return<div><h1>{text}</h1>
    <button onClick={()=>setText('Logout')}>Logout</button>
    </div>
}

// export function Comp4() {
//     const context = useContext(MyContext)
//     return <div>{context.data}</div>
    
// }