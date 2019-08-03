import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-weight: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Dmitriy Kulikov<br /> Web+UI Designer</h1>
        <p>Effectiveness+creativity<br />I'm create awesome design with world-class design.</p>
        <Link to="/page-2/">Watch the portfolio</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-photoshop.png')} width="50" />
          <img src={require('../images/logo-illustrator.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>Full spector of services</h2>
      <div className="CardGroup">
        <Card 
          title="Business card"
          text="10 sections"
          image={require('../images/BusinessCard.jpg')} />
        <Card 
          title="Web Design"
          text="12 sections"
          image={require('../images/1-3.jpg')} />
        <Card 
          title="Brand Design"
          text="5 sections"
          image={require('../images/brand.jpg')} />
        <Card 
          title="ARKit 2"
          text="10 sections"
          image={require('../images/app.png')} />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interaction,dynamic data with Contentful and deploying your site with Netlify"
     />
     <SectionCaption>12 sections - 6 hours</SectionCaption>
     <SectionCellGroup>
     {staticdata.cells.map(cell => (
       <Cell 
        title={cell.title}
        image={cell.image} />
     ))}
     </SectionCellGroup>
  </div>
)

export default IndexPage
