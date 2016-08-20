import React from 'react'
import './Company.css'
import NavItem from './NavItem'
import NavTitle from './NavTitle'

const navItems = [
  { title: '骚窝介绍', image: 'glyph-10-purple.png' },
  { title: '骚窝生活', image: 'glyph-10-orange.png' },
  { title: '培训与发展', image: 'glyph-10-red.png' },
  { title: '骚窝福利包', image: 'glyph-10-pink.png' },
  { title: '办公室实景', image: 'glyph-10-magenta.png' },
]

const Company = () => (
  <div className="container">
    <NavTitle title={'了解公司'} image={'go-self-service-2.png'}/>

    <div className="row">
      {navItems.slice(0, 3).map((item, index) => <NavItem key={index} title={item.title} image={item.image}/>)}
    </div>
    <div className="row">
      {navItems.slice(3, 5).map((item, index) => <NavItem key={index} title={item.title} image={item.image}/>)}
    </div>
  </div>
)

export default Company
