import React from 'react'
import { Link } from 'react-router'

import { NavItem, NavTitle } from '../components'

import './Company.less'

const navItems = [
  { title: '思窝\n介绍', link: 'introduction', image: 'glyph-10-purple.png' },
  { title: '思窝\n生活', link: 'activity', image: 'glyph-10-orange.png' },
  { title: '培训与\n发展', link: 'training', image: 'glyph-10-red.png' },
  { title: '思窝\n福利包', link: 'benefit', image: 'glyph-10-pink.png' },
  { title: '办公室\n实景', link: 'office', image: 'glyph-10-magenta.png' },
]

const renderItem = ({ title, link, image }, index) => (
  <div key={index} className={index === 0 ? "col-xs-offset-2 col-xs-4 Company-nav": "col-xs-4 Company-nav"}>
    <Link to={`company/${link}`}>
      <NavItem title={title} image={image}/>
    </Link>
  </div>
)

const Company = () => (
  <div className="container">
    <NavTitle title={'走进思窝'} image={'go-self-service-2.png'}/>

    <div className="row">
      {navItems.map((item, index) => renderItem(item, index))}
    </div>
  </div>
)

export default Company
