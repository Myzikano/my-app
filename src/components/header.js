import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasSrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }


  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true})
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  

  render() {
    return (
      <div className={this.state.hasScrolled ? 
      'Header HeaderScrolled' : 'Header'}> 
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo1.svg')} width="223" height="46" /></Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/contacts">Contacts11</Link>
          <button><a href="mailto:myzikano@gmail.com">Hire Me</a></button>
        </div>
      </div>
    )
  }
}

export default Header
