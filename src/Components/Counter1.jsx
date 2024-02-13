import useCount from '../Hooks/useCount';

export function Counter1() {
    const [count,Increament,Decreament]=useCount()
    
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={Increament}>Increament</button>
            <button onClick={Decreament}>Decreament</button>
        </div>
    )
}