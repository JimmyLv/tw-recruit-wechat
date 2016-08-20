import React from 'react'
import NavItem from './NavItem'
import NavTitle from './NavTitle'

import './Company.css'

const navItems = [
  { title: '骚窝\n介绍', image: 'glyph-10-purple.png' },
  { title: '骚窝\n生活', image: 'glyph-10-orange.png' },
  { title: '培训与\n发展', image: 'glyph-10-red.png' },
  { title: '骚窝\n福利包', image: 'glyph-10-pink.png' },
  { title: '办公室\n实景', image: 'glyph-10-magenta.png' },
]

const renderItem = (index, item) => (
  <div className="col-xs-4 Company-nav" style={{ transform: 'rotate(7deg)' }}>
    <NavItem key={index} title={item.title} image={item.image}/>
  </div>
)

const Company = () => (
  <div className="container">
    <NavTitle title={'了解公司'} image={'go-self-service-2.png'}/>

    <div className="row">
      {navItems.map((item, index) => (renderItem(index, item)))}
    </div>
  </div>
)

export default Company
