import React from 'react'
import './Company.css'
import NavItemWithTwoColumn from './NavItemWithTwoColumn'
import NavTitle from './NavTitle'

const navItems = [
  { title: '校招行程', image: 'glyph-10-blue.png' },
  { title: '开放职位', image: 'glyph-10-orange.png' },
  { title: '校招公告', image: 'glyph-10-pink.png' },
  { title: 'FAQ', image: 'glyph-10-teal.png' },
]

const Recruit = () => (
  <div className="container">

    <NavTitle title={'应聘校招'} image={'voice-of-the-customer.png'}/>

    <div className="row">
      {navItems.slice(0, 2).map((item, index) => <NavItemWithTwoColumn key={index} title={item.title} image={item.image}/>)}
    </div>
    <div className="row">
      {navItems.slice(2, 4).map((item, index) => <NavItemWithTwoColumn key={index} title={item.title} image={item.image}/>)}
    </div>
  </div>
)

export default Recruit
