import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ContactsGroup = styled.div`
text-align: center;
`

const NotFoundPage = () => (
    <div>
    <img src={require('../images/404.jpg')} width="100%" />
    <ContactsGroup><Link to="/">Go back to the Homepage</Link></ContactsGroup>
    </div>
  )

 export default NotFoundPage

