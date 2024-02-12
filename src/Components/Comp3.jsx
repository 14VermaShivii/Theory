import { useContext } from 'react'
import { OtherContext } from './OtherContext';
export function Comp3() {
    const context = useContext(OtherContext)
    return <div>{context.data}</div>
    
}