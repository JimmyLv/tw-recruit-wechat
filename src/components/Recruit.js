import React from 'react'
import './Recruit.css'
import NavItem from './NavItem'

const navItems = [
  { title: '骚窝介绍', image: 'glyph-10-purple.png' },
  { title: '骚窝生活', image: 'glyph-10-orange.png' },
  { title: '培训与发展', image: 'glyph-10-red.png' },
  { title: '骚窝福利包', image: 'glyph-10-pink.png' },
  { title: '办公室实景', image: 'glyph-10-magenta.png' },
]

const Recruit = () => (
  <div className="container">
    <div className="row" style={{ marginTop: '20px', marginBottom: '80px' }}>
      <div className="col-xs-8 col-xs-offset-3">
        <div className="media">
          <div className="media-left media-middle">
            <img className="media-object" style={{ width: '60px' }} src={require('../../images/go-self-service-2.png')}/>
          </div>
          <div className="media-body">
            <h2>了解公司</h2>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      {navItems.slice(0, 3).map((item, index) => <NavItem key={index} title={item.title} image={item.image}/>)}
    </div>
    <div className="row">
      {navItems.slice(3, 5).map((item, index) => <NavItem key={index} title={item.title} image={item.image}/>)}
    </div>
  </div>
)

export default Recruit
