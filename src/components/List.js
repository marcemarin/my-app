import { useState, Fragment } from "react";

const List = () => {

    const [numbers, setNumbers] = useState([1, 2, 3]);

    const addNumber = () => {
        //console.log("click")
        setNumbers([...numbers, 4])
    }

    return (
        <Fragment>
            <h2>List </h2>
            <button onClick={addNumber}>Add number</button>
            {
                numbers.map((item, index) =>
                    <p key={index}> {item}</p>
                )
            }
        </Fragment>
    );

}

export default List;