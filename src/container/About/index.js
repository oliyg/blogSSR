import React from 'react'
import Header from '../../components/Header/'

const About = () => (
  <div>
    <Header />
    <div onClick={() => { console.log('d') }}>about</div>
  </div>
)

export default About
