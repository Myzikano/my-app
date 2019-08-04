import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const AboutmeGroup = styled.div`
    background: White;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
    text-align: center;
    font-size: 40;
`
const Aboutme = styled.div`
    padding: 0px 0;
    display: grid;
    grid-gap: 20px;
`
      


const aboutme = () => (
    <Aboutme>
    <div>
    <img src={require('../images/aboutme.jpg')} width="1920" CropImage="500" />

    <AboutmeGroup><Link to="/">Go back to the Homepage</Link></AboutmeGroup>
    </div>
    </Aboutme>
  )

export default aboutme