import React from "react"
import './Form.css'

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "",
            comment: "",
            policy: true
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }
    
    return (
        <div className="form-container">
            <h2>Form</h2>
            <form>
                <label htmlFor="FirstName">Frist Name:</label>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <label htmlFor="LastName">Last Name:</label>
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <label htmlFor="comment">Comment:</label>
                <textarea 
                    placeholder="What is your mind?"
                    onChange={handleChange}
                    name="comment"
                    value={formData.comment} 
                />
                <input 
                    name="policy"
                    id="policy"
                    type="checkbox"
                    onChange={handleChange}
                    checked={formData.policy}
                />
                <label htmlFor="policy"> Agree with our policy?</label>
            </form>
        </div>
    )
}
