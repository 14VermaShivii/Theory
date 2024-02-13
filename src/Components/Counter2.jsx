import useCount from '../Hooks/useCount';

export function Counter2() {
    const [count,Increament,Decreament]=useCount(100)
    
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={Increament}>Increament</button>
            <button onClick={Decreament}>Decreament</button>
        </div>
    )
}