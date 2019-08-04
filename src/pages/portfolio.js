import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PortfolioGroup = styled.div`
    background: White;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
    text-align: center;
    font-size: 40;
    media (max-width: 720px) {
            width: 500px;
            size: 500px;
      }
`
const Portfolio = styled.div`
    padding: 0px 0;
    display: grid;
    grid-gap: 20px;

    @media (max-width: 720px) {
            width: 500px;
            size: 500px;
      }
`
      


const portfolio = () => (
    <Portfolio>
    <div>
    <img src={require('../images/portfolio/1.png')} width="1920" />
    <img src={require('../images/portfolio/2.jpg')} width="1920" />
    <img src={require('../images/portfolio/3.jpg')} width="1920" />
    <img src={require('../images/portfolio/4.jpg')} width="1920" />
    <img src={require('../images/portfolio/5.jpg')} width="1920" />
    <img src={require('../images/portfolio/6.png')} width="1920" />
    <img src={require('../images/portfolio/7.jpg')} width="1920" />
    <img src={require('../images/portfolio/8.jpg')} width="1920" />
    <img src={require('../images/portfolio/9.jpg')} width="1920" />
    <img src={require('../images/portfolio/10.jpg')} width="1920" />
    <img src={require('../images/portfolio/11.jpg')} width="1920" />
    <img src={require('../images/portfolio/12.png')} width="1920" />
    <img src={require('../images/portfolio/13.jpg')} width="1920" />
    <img src={require('../images/portfolio/14.png')} width="1920" />

    <PortfolioGroup><Link to="/">Go back to the Homepage</Link></PortfolioGroup>
    </div>
    </Portfolio>
  )

export default portfolio