import { useContext } from 'react'
import { OtherContext } from './OtherContext';
export function Comp2() {
    const context = useContext(OtherContext)
    return <div>{context.data}</div>
    
}