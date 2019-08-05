import React from 'react'
import './aboutme.css'

const aboutme = () => (

    <div className="Aboutme">
        <div className="AboutmeGroup">
            <h1>About Me</h1>
            <h2>Dmitriy Kulikov</h2>
            <div className="Image">
                <img src={require('../images/6.png')} />
            </div>
            <h3>I’m freelance designer focusing on web design, user interface<br />
            design and graphic design. I’m 28 old.</h3>
            <h4>Today one of my freelance mission is helping young entrepreneurs <br />
            and startups to design their branding and/or create their communication tools. <br />
            I will be honored to meet you and work with you.</h4>
        </div>
    </div>
)

export default aboutme