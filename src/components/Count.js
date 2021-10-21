import { useState, Fragment } from "react";

const Count = () => {

    const [number, setNumber] = useState(0);

    const up = () => {
        console.log("click")
        setNumber(number + 1)
    }

    return (
        <Fragment>
            <h3>Primer componente {number} </h3>
            <button onClick={up}> Up </button>
        </Fragment>
    );

}

export default Count;