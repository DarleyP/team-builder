import React from "react";


const Form = (props) => {

    const handleChange = (evt) => {
        const { name, value} = evt.target;
        props.change(name, value);
    }

     const handleSubmit = (evt) => {
        evt.preventDefault();
        props.submit();
     }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username
                <input
                    placeholder="Enter Username Here!"
                    value={props.values.name}
                    name="name"
                    onChange={handleChange}
                />
            </label>
            <label>Email
                <input 
                placeholder="Enter Your Email Here!"
                value={props.values.email}
                name='email'
                onChange={handleChange}
                />
            </label>
            <label>Role
                <input
                    placeholder="Enter Your Role Here!"
                    value={props.values.role}
                    name="role"
                    onChange={handleChange}
                    />
            </label>
            <input type="submit" value="Create Your Team!"
            />
        </form>
    )
}


export default Form;