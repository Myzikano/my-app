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
          <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
          <Link to="/courses">Portfolio</Link>
          <Link to="/downloads">About Me</Link>
          <Link to="/workshops">Contacts</Link>
          <Link to="/buy"><button>Hire Me</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
