import React from 'react'
import NavItem from './NavItem'
import NavTitle from './NavTitle'

import './Recurit.css'

const navItems = [
  { title: '校招\n行程', image: 'glyph-10-blue.png' },
  { title: '开放\n职位', image: 'glyph-10-orange.png' },
  { title: '校招\n公告', image: 'glyph-10-pink.png' },
  { title: 'FAQ', image: 'glyph-10-teal.png' },
]

const renderItem = (item, index) => (
  <div className="col-xs-6 Recruit-nav">
    <NavItem key={index} title={item.title} image={item.image}/>
  </div>
)

const Recruit = () => (
  <div className="container">

    <NavTitle title={'应聘校招'} image={'voice-of-the-customer.png'}/>

    <div className="row">
      {navItems.map((item, index) => renderItem(item, index))}
    </div>
  </div>
)

export default Recruit
