import React from 'react'
import { Link } from 'react-router'

import NavItem from '../components/NavItem'
import NavTitle from '../components/NavTitle'

import './Campus.less'

const navItems = [
  { title: '最佳编程\n体验之旅', link: 'coding', image: 'glyph-10-blue.png' },
  { title: '企业\n开放日', link: 'openday', image: 'glyph-10-orange.png' },
  { title: '校园\n女生活动', link: 'girl', image: 'glyph-10-pink.png' },
]

const Campus = () => (
  <div className="container">
    <NavTitle title={'校园活动'} image={'campus-activities.png'}/>

    <div className="row">
      {navItems.map(({ title, link, image }, index) =>(
        <div key={index} className={index === 0 ? "col-xs-offset-3 col-xs-6 Campus-nav": "col-xs-6 Campus-nav"}>
          <Link to={`campus/${link}`}>
            <NavItem title={title} image={image}/>
          </Link>
        </div>
      ))}
    </div>
  </div>
)

export default Campus
