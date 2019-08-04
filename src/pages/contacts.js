import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ContactsGroup = styled.div`
    background: White;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
    text-align: center;
    font-size: 40;
`
const Contacts = styled.div`
    padding: 0px 0;
    display: grid;
    grid-gap: 20px;
`
      


const contacts = () => (
    <Contacts>
    <div>
    <img src={require('../images/1.jpg')} width="1920" CropImage="500" />

    <ContactsGroup><Link to="/">Go back to the Homepage</Link></ContactsGroup>
    </div>
    </Contacts>
  )

export default contacts