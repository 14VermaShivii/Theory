import { useContext } from 'react'
import { MyContext } from './MyContext';

export function Comp1() {
    const context = useContext(MyContext)
    return <div>{context.data}</div>
    
}