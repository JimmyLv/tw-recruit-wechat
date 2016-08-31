import React from 'react'

import NavSubTitle from '../../components/NavSubTitle'
import Image from '../../components/Image'
import './Schedule.less'

const renderProgresses = ({ image, description }, index, length) => (
  <div key={index}>
    <div className="row">
      <div className="col-xs-4">
        <img className="progress-image" src={require(`../../../images/${image}`)}/>
      </div>
      <strong className="col-xs-8 progress-description">{description}</strong>
    </div>
  </div>
)

const progresses = [
  { description: '登录校招网站查看开放职位', image: 'date-2.png' },
  { description: '注册账号，提交个人信息和简历', image: 'badge.png' },
  { description: '参加所在城市宣讲会，宣讲会后参与笔试', image: 'edit.png' },
  { description: '下载编程作业，在规定时间内完成并上传', image: 'data-1.png' },
  { description: 'HR 面试', image: 'fast.png' },
  { description: '技术面试', image: 'go-break-silos.png' },
  { description: 'Offer 到手', image: 'gift.png' },
]

const Schedule = () => (
  <div className="container Schedule">
    <NavSubTitle title="校招流程"/>
    {progresses.map((p, index) => renderProgresses(p, index, progresses.length))}

    <NavSubTitle title="宣讲会安排"/>
    <p>ThoughtWorks校园宣讲会将于十月十日左右登陆北京、成都、西安和武汉地区，同学们要及时关注校招网  站内公告栏里的宣讲日期，敬请期待！</p>
    <p>
      <ul>
        <li>成都行：四川大学望江校区，成都电子科技大学清水河校区</li>
        <li>西安行：西北大学本部，西北工业大学本部，西安电子科技大学本部，西安交通大学本部</li>
        <li>武汉行：武汉大学，武汉华中科技大学</li>
        <li>北京行：北京交通大学，北京理工大学</li>
      </ul>
    </p>
    <p>
      同时也请关注校园招聘微信平台 <span className="faq-keyword">@ThoughtWorks校园招聘</span> 和新浪微博 <span className="faq-keyword">@ThoughtWorks招才猫姐</span> 及时了解校招相关信息。
    </p>
    <Image image={'wechat-qrcode.jpg'}/>
    <br/>
  </div>
)

export default Schedule
