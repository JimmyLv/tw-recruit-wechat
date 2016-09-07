import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import { NavItem, NavTitle } from '../../components'

import styles from './Campus.less'

console.log(styles);

const navItems = [
  { title: '最佳编程\n体验之旅', link: 'coding', image: 'glyph-10-blue.png' },
  { title: '企业\n开放日', link: 'openday', image: 'glyph-10-orange.png' },
  { title: '校园\n女生活动', link: 'girl', image: 'glyph-10-pink.png' },
]

const navClass = (index) => classNames(
  [styles.nav],
  'col-xs-6',
  { 'col-xs-offset-3': index === 0 }
)

const Campus = () => (
  <div className="container">
    <NavTitle title={'校园活动'} image={'campus-activities.png'}/>

    <div className="row">
      {navItems.map(({ title, link, image }, index) =>(
        <div key={index} className={navClass(index)}>
          <Link to={`campus/${link}`}>
            <NavItem title={title} image={image}/>
          </Link>
        </div>
      ))}
    </div>
  </div>
)

export default Campus
