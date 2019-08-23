import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Portfolio = styled.div`
    padding: 0px 0;
    display: grid;
    grid-gap: 20px;
    @media (max-width: 720px) {
        max-width: 48%;
      }
`

const PortfolioGroup = styled.div`
    background: White;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
    text-align: center;
    font-size: 40;
    @media (max-width: 900px) {
        width: 500px;
        size: 500px;
      }
`

const portfolio = () => (
    <Portfolio>
    <div class={Portfolio}>
    <img src={require('../images/portfolio/1.jpg')} width="100%"/>
    <img src={require('../images/portfolio/2.jpg')} width="100%"/>
    <img src={require('../images/portfolio/3.jpg')} width="100%"/>
    <img src={require('../images/portfolio/4.jpg')} width="100%"/>
    <img src={require('../images/portfolio/5.jpg')} width="100%"/>
    <img src={require('../images/portfolio/6.jpg')} width="100%" />
    <img src={require('../images/portfolio/7.jpg')} width="100%" />
    <img src={require('../images/portfolio/8.png')} width="100%" />
    <img src={require('../images/portfolio/9.jpg')} width="100%" />
    <img src={require('../images/portfolio/10.jpg')} width="100%" />
    <img src={require('../images/portfolio/11.png')} width="100%" />

    <PortfolioGroup><Link to="/">Go back to the Homepage</Link></PortfolioGroup>
    </div>
    </Portfolio>
  )

export default portfolio