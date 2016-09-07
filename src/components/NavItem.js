import React from 'react'
import styles from './NavItem.less'

const NavItem = ({ title, image }) => (
  <div>
    <img src={require(`../../images/${image}`)} className="img-responsive" alt={title}/>
    <div className={styles.title}>
      {title.split('\n').map((t, index)=><h2 key={index} data-role="nav-item-title">{t}</h2>)}
    </div>
  </div>
)

export default NavItem
