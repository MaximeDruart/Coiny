import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName : "",
            lastName : "",
            email : "",
            password: "",
            password2: "",
            
         }
    }

    onSubmitHandler = event => {
        event.preventDefault()
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        // axios.post("http://localhost:5000/exercises/add", exercise)
        //     .then(res => console.log(res.data))
        // window.location = ('/')

    }

    handleChange = event => {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() { 
        return (
            <form noValidate onSubmit={this.handleSubmit}>
                <label> First name:</label>
                <input
                    name= "firstName"
                    type="text"
                    value={this.state.firstName}
                    onChange={this.handleChange} 
                />
                <label> Last name:</label>
                <input
                    name="lastName"
                    type="text"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                />

                <label> Email:</label>
                <input
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />

                <label> Password :</label>
                <input
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />

                <label> Confirm your password :</label>
                <input
                    name="password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.handleChange}
                />

                <input type="submit" value="Submit" />
            </form>
        )
    }
}
 
export default Form;