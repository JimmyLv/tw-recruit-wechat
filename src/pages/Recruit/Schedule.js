import React from 'react'

import NavSubTitle from '../../components/NavSubTitle'
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
  { description: 'HR面试，小组面试，技术面试', image: 'fast.png' },
  { description: 'Offer 到手', image: 'gift.png' },
]

const Schedule = () => (
  <div className="container">
    <NavSubTitle title="校招流程"/>
    {progresses.map((p, index) => renderProgresses(p, index, progresses.length))}

    <NavSubTitle title="宣讲会安排"/>
    <p>
      ThoughtWorks校园宣讲会将于9月份中下旬登陆成都、西安、北京和武汉地区，敬请期待！
    </p>
    <p>
      <strong>2017 校园招聘宣讲会和笔试在什么时候开始？</strong>
      <div className="faq-highlight">西安将会在9月21-24号这周进行，十一假期之后，武汉，成都，北京三地校园行同步进行，同学们要及时关注校招网站内公告栏里的宣讲日期，做好准备噢。</div>
    </p>
    <p>
      同时也请关注ThoughtWorks微信平台和新浪微博@<strong>ThoughtWorks招才猫姐</strong>，或者添加校招微信账号：<strong>thoughtworks_hr</strong> 及时了解校招相关信息。
    </p>
    <br/>
  </div>
)

export default Schedule
