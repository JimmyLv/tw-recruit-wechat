import React from 'react'

import NavSubTitle from '../../components/NavSubTitle'
import Image from '../../components/Image'
import './index.less'

const renderImage = ({ image, city, title }, index) => (
  <Image key={index} image={image} title={title}/>
)

const images = [
  { city: '成都', title: '互动游戏', image: 'openday-成都.jpg' },
  { city: '北京', title: '主题分享', image: 'openday-session.jpg' },
  { city: '成都', title: '公司参观', image: 'openday-share.jpg' },
  { city: '成都', title: '座谈交流会', image: 'openday-成都1.png' },
]

const OpenDay = () => (
  <div className="container">
    <NavSubTitle title="企业开放日"/>
    <div className="coding-description">
      <p>每年暑假，ThoughtWorks会与各地高校合作，组织学校学生参加企业开放日活动。帮助学生近距离接触ThoughtWorks，了解企业的工作方式和文化氛围，也能让学生提前get到企业的发展方向和工作体验。</p>
      <Image image={'openday.jpg'}/>
      <div className="coding-benefit"><strong>你将获得：</strong></div>
      <ul>
        <li>你可以听到 IT程序媛职场心路历程发生了怎样的变化？</li>
        <li>你也可以近距离与IT公司不同职位的女性从业者沟通，了解神秘工作背后的点点滴滴。</li>
        <li>你可以听到同龄女生，走出象牙塔，初入职场的心路历程。</li>
      </ul>
    </div>
    {images.map((image, index) => renderImage(image, index))}
  </div>
)

export default OpenDay
