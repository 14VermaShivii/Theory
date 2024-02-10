import { useContext } from 'react';
import {MyContext} from './MyContext';

 export function MyComponent(params) {
    const {text ,SetText}=useContext(MyContext) //globally set
    return(<div>
        <h1>{text}</h1>
        <button onClick={()=>SetText("hello,world")}>Change text</button>
    </div>
    );
}