import React from "react"
import './Form.css'

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "",
            comment: "",
            policy: true,
            employment: "",
            favoriteColor: ""
        }
    )

    console.log(formData.favoriteColor);
    
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
                    className="d-inline"
                    name="policy"
                    id="policy"
                    type="checkbox"
                    onChange={handleChange}
                    checked={formData.policy}
                />
                <label className="d-inline" htmlFor="policy"> Agree with our policy?</label>
                <fieldset>
                    <legend>Current Employment Status</legend>
                    <input
                        className="d-inline"
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment === "unemployed"}
                        onChange={handleChange}
                    />
                    <label className="d-inline" htmlFor="unemployed">Unemployed</label>
                    <br />
                    <input 
                        className="d-inline"
                        type="radio"
                        id="part-time" 
                        name="employment"
                        value="part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}   
                    />
                    <label className="d-inline" htmlFor="part-time">Part-time</label>
                    <br />
                    <input 
                        className="d-inline"
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    />
                    <label className="d-inline" htmlFor="full-time">Full-time</label>
                    <br />
                </fieldset>
                <br />
                <label htmlFor="favoriteColor">Color:</label>
                <select 
                    id="favoriteColor"
                    value={formData.favoriteColor}
                    onChange={handleChange}
                    name="favoriteColor"
                >
                    <option value="">Choose Your Favorite Color</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
            </form>
        </div>
    )
}
