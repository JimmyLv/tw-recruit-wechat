import React from 'react'

import NavSubTitle from '../../components/NavSubTitle'
import Image from '../../components/Image'

const renderImage = ({ image, city }, index) => (
  <Image key={index} image={image} title={`最佳编程体验之旅——${city}站`}/>
)

const images = [
  { city: '成都', image: 'coding-成都1.jpg' },
  { city: '北京', image: 'coding-北京.jpg' },
  { city: '西安', image: 'coding-西安1.jpg' },
  { city: '武汉', image: 'coding-武汉1.jpg' },
]

const Coding = () => (
  <div className="container">
    <NavSubTitle title="最佳编程体验之旅"/>
    <div>
      最佳编程体验之旅是由ThoughtWorks发起的全国性质的编程实践体验活动, 向全国重点院校的优秀IT学子，在北京、西安、成都和武汉同步进行。采用一对一导师技术指导，亲临全球IT顶尖咨询公司各地office，感受技术氛围，提升技术能力。
    </div>
    {images.map((image, index) => renderImage(image, index))}
  </div>
)

export default Coding
