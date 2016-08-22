import React from 'react'
import { Link } from 'react-router'

import NavItem from '../components/NavItem'
import NavTitle from '../components/NavTitle'

import './Company.css'

const navItems = [
  { title: '骚窝\n介绍', link: 'introduction', image: 'glyph-10-purple.png' },
  { title: '骚窝\n生活', link: 'activity', image: 'glyph-10-orange.png' },
  { title: '培训与\n发展', link: 'training', image: 'glyph-10-red.png' },
  { title: '骚窝\n福利包', link: 'benefit', image: 'glyph-10-pink.png' },
  { title: '办公室\n实景', link: 'office', image: 'glyph-10-magenta.png' },
]

const renderItem = ({ title, link, image }, index) => (
  <div key={index} className="col-xs-4 Company-nav" style={{ transform: 'rotate(7deg)' }}>
    <Link to={`company/${link}`}>
      <NavItem title={title} image={image}/>
    </Link>
  </div>
)

const Company = () => (
  <div className="container">
    <NavTitle title={'了解公司'} image={'go-self-service-2.png'}/>

    <div className="row">
      {navItems.map((item, index) => renderItem(item, index))}
    </div>
  </div>
)

export default Company
