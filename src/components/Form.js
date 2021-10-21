import { Fragment, useState } from "react";

const Form = () => {

    const [data, setData] = useState({
        first_name: '',
        last_name: ''
    })

    const handleInputChangue = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value
        })
    }

    return (
        <Fragment>
            <h1>Form</h1>
            <form className="row">
                <div className="col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        onChange={handleInputChangue}
                    />
                </div>
                <div className="col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        onChange={handleInputChangue}
                    />
                </div>
                <div className="col-md-3">
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
            </form>
        </Fragment>
    );
}

export default Form;