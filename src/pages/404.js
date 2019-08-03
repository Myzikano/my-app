import React from 'react'

const NotFoundPage = () => (
  <div>
    <h1>404 NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <img src={require('../images/404.png')} width="800" />
  </div>
)

export default NotFoundPage
