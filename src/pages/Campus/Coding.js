import React from 'react'
import './Coding.less'

import NavSubTitle from '../../components/NavSubTitle'
import Image from '../../components/Image'

const renderImage = ({ image, city }, index) => (
  <Image key={index} image={image} title={`最佳编程体验之旅——${city}站`}/>
)

const images = [
  { city: '成都', image: 'coding-成都.jpg' },
  { city: '北京', image: 'coding-北京.jpg' },
  { city: '西安', image: 'coding-西安.jpg' },
  { city: '武汉', image: 'coding-武汉.jpg' },
]

const Coding = () => (
  <div className="container">
    <NavSubTitle title="最佳编程体验之旅"/>
    <div className="coding-description">
      <p>最佳编程体验之旅是由 ThoughtWorks 发起的全国性质的编程实践体验活动，向全国重点院校的优秀IT学子，在北京、西安、成都和武汉同步进行。
      </p>
      <div className="coding-benefit"><strong>你将获得：</strong></div>
      <ul>
        <li>亲临全球最难面试IT公司，零距离接触技术大牛，学习最前沿的编程技能！</li>
        <li>体验自由创新Geek氛围，与男神女神深入交流，经历一场完美编程体验！</li>
        <li>经历四期狂拽酷炫Pair Programming Game，感受代码改变世界的力量！</li>
      </ul>
    </div>
    <p>
      <Image image={'coding-宣传单页.jpg'}/>
      {images.map((image, index) => renderImage(image, index))}
    </p>
  </div>
)

export default Coding
