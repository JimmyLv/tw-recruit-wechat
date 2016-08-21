import React from 'react'

import NavSubTitle from '../../components/NavSubTitle'
import Image from '../../components/Image'

const renderImage = ({ image, city, university }, index) => (
  <Image key={index} image={image} title={`${university}来 ThoughtWorks ${city}办公室参观`}/>
)

const images = [
  { city: '成都', university: '四川大学和电子科技大学学生', image: 'openday-成都.jpg' },
  { city: '北京', university: '西安电子科技大学 “010” 暑假社区实践队', image: 'openday-西安.jpg' },
  { city: '成都', university: '北京交通大学软件学院实践队', image: 'openday-成都1.png' },
]

const OpenDay = () => (
  <div className="container">
    <NavSubTitle title="企业开放日"/>
    <div>每年暑假，各地高校纷纷组织学校学生参加ThoughtWorks举办的企业开放日活动。企业开放日作为校企合作的一种实践形式，不仅建立起学生与企业沟通交流的纽带，还有助于公司品牌形象的深入，为企业后续的人才升级与校园招聘工作奠定坚实的基础。</div>
    {images.map((image, index) => renderImage(image, index))}
  </div>
)

export default OpenDay
