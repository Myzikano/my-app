import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    grid-gap: 25px;
    align-items: center;
    @media (max-width: 720px) {
            grid-template-columns: 30px auto;
      }
`

const CellImage = styled.div`
    width: 60px;
    height: 60px;
    background: White;
    border-radius: 0px;
    background-image: url(${props => props.image});
    background-size: 60px;
    
    @media (max-width: 720px) {
            width: 40px;
            height: 40px;
            background-size: 40px;
      }
`

const CellTitle = styled.div`
    font-size: 24px;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    padding: 30px 0;
    
    @media (max-width: 720px) {
            font-size: 15px;
            font-weight: 600;
      }
`

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell