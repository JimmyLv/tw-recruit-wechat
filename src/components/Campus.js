import React from 'react'
import './Company.css'
import NavItem from './NavItem'
import NavTitle from './NavTitle'

import './Campus.css'

const navItems = [
  { title: '最佳编程\n体验之旅', image: 'glyph-10-blue.png' },
  { title: '企业\n开放日', image: 'glyph-10-orange.png' },
  { title: '校园\n女生活动', image: 'glyph-10-pink.png' },
]

const Company = () => (
  <div className="container">
    <NavTitle title={'校园活动'} image={'campus-activities.png'}/>

    <div className="row">
      {navItems.map((item, index) =>(
        <div className="col-xs-6 Campus-nav">
          <NavItem key={index} title={item.title} image={item.image}/>
        </div>
      ))}
    </div>
  </div>
)

export default Company
