import React from 'react'
import '../About.css'

const About = ({ name }) => {
    const hobbies = ['Lugemine', 'Küpsetamine', 'Magamine']

    return (
        <div className="container">
        <h1>{name}</h1>
        <ul className="hobbies-list">
            {hobbies.map((hobbies, index) => (
                <li key={index}>{hobbies}</li>
            ))}
        </ul>
        <form className="contact-form">
            <label>
                Email:
                <input type="email" name="email"/>
            </label>
            <label>
                Tekstiväli:
                <textarea name="message"/>
            </label>
            <button type="submit">Salvesta</button>
        </form>
        <button className="cta-button">Call to Action</button>
        </div>
    )
}

export default About