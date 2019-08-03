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
        <Link to="/portfolio/">Watch the portfolio</Link>
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
          text="DK"
          image={require('../images/BusinessCard.jpg')} />
        <Card 
          title="Web Design"
          text="DK"
          image={require('../images/1-3.jpg')} />
        <Card 
          title="App Design"
          text="DK"
          image={require('../images/app.png')} />
        <Card 
          title="Brand Design"
          text="DK"
          image={require('../images/brand.jpg')} />
          <Card 
          title="Typography Design"
          text="DK"
          image={require('../images/typography.png')} />
        <Card 
          title="Product Design"
          text="DK"
          image={require('../images/product.jpg')} />
        <Card 
          title="Motion Design"
          text="DK"
          image={require('../images/gif.gif')} />
        <Card 
          title="Consulting"
          text="DK"
          image={require('../images/consulting.png')} />
      </div>
    </div>
    <Section
      image={require('../images/walpaper5.jpg')}
      logo={require('../images/logo1.svg')}
      title="DESIGN YOUR FUTURE"
      text=" 'Most people make the mistake of thinking design is what it looks like. People think it’s this veneer – that the designers are handed this box and told, “Make it look good!” That’s not what we think design is. It’s not just what it looks like and feels like. Design is how it works.' Steve Jobs "
     />
     <SectionCaption>12 Ways Graphic Design Benefits Your Business</SectionCaption>
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
