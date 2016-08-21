import React from 'react'
import { Link } from 'react-router'

import NavItem from '../components/NavItem'
import NavTitle from '../components/NavTitle'

import './Recruit.css'

const navItems = [
  { title: '校招\n行程', link: 'schedule', image: 'glyph-10-blue.png' },
  { title: '开放\n职位', link: 'position', image: 'glyph-10-orange.png' },
  { title: '校招\n公告', link: 'announce', image: 'glyph-10-pink.png' },
  { title: 'FAQ', link: 'faq', image: 'glyph-10-teal.png' },
]

const renderItem = ({ title, link, image }, index) => (
  <div key={index} className="col-xs-6 Recruit-nav">
    <Link to={`recruit/${link}`}>
      <NavItem title={title} image={image}/>
    </Link>
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
