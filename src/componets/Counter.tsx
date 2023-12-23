import { useState } from "react";
import classes from './Counter.module.scss';


export const Counter = () : JSX.Element => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick = {increment}  className={classes.btn}>Жмякай туту</button>
        </div>
    )
}