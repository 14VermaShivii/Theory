import { useContext } from 'react'
import { MyContext } from './MyContext';

export function Comp4() {
    const context = useContext(MyContext)
    return <div>{context.data}</div>
    
}