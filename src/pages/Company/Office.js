import React from 'react'

import NavSubTitle from '../../components/NavSubTitle'
import Image from '../../components/Image'

import './Training.less'

const renderOffice = (office, index) => (
  <div key={index}>
    <NavSubTitle title={`${office}Office`}/>
    <Image image={`${office}1.jpg`}/>
    <Image image={`${office}2.jpg`}/>
  </div>
)

const Office = () => (
  <div className="container">
    {['北京', '西安', '武汉', '成都'].map((office, index) => renderOffice(office, index))}
  </div>
)

export default Office
