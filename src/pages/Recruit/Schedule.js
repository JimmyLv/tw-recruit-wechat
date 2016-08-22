import React from 'react'

import NavSubTitle from '../../components/NavSubTitle'
import './Schedule.css'

const renderProgresses = ({ image, description }, index) => (
  <div key={index} className="col-xs-4">
    <div className="row">
      <div className="col-xs-9">
        <img className="img-responsive" src={require(`../../../images/${image}`)}/>
      </div>
      <div className="col-xs-3">
        <img className="img-responsive progress-mark" src={require(`../../../images/glyph-9-teal.png`)}/>
      </div>
    </div>
    <p className="row progress-description">
      {description}
    </p>
  </div>
)

const progresses = [
  { description: '登录校招网站查看开放职位', image: 'date-2.png' },
  { description: '注册账号，提交个人信息和简历', image: 'badge.png' },
  { description: '参加所在城市宣讲会，宣讲会后参与笔试', image: 'edit.png' },
  { description: '下载编程作业，在规定时间内完成并上传', image: 'data-1.png' },
  { description: 'HR面试，小组面试，技术面试', image: 'fast.png' },
  { description: 'Offer', image: 'gift.png' },
]

const Schedule = () => (
  <div className="container">
    <NavSubTitle title="校招流程"/>
    <div className="row">
      {progresses.map((p, index) => renderProgresses(p, index))}
    </div>
    <NavSubTitle title="宣讲会安排"/>
    <p>
      ThoughtWorks校园宣讲会将于9月份中下旬登陆成都、西安、北京和武汉地区，敬请期待！
    </p>
  </div>
)

export default Schedule
