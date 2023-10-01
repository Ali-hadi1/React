import React from "react"
import './Form.css'

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "",
            comment: ""
        }
    )
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <div class="form-container">
            <form>
                <label for="FirstName">Frist Name:</label>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <label for="LastName">Last Name:</label>
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <label for="email">Email:</label>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <label for="comment">Comment:</label>
                <textarea 
                    placeholder="What is your mind?"
                    onChange={handleChange}
                    name="comment"
                    value={formData.comment} 
                />
            </form>
        </div>
    )
}
