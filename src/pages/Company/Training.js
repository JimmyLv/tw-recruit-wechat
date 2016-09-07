import React from 'react'

import { NavSubTitle, Image }from '../../components'

import './Training.less'

const Training = () => (
  <div className="container Training">
    <NavSubTitle title="TWU"/>
    <p>
      TWU，即 ThoughtWorks University，是 ThoughtWorks 针对世界各地的应届毕业生推出的为期五周的“公派留学”。不同国籍、不同office的ThoughtWorkers将在印度齐聚一堂，共同度过五周的难忘时光。
      <Image image={'TWU1.jpg'}/>
    </p>
    <p>
      TWU是毕业生入职之后的第一堂课，学生们需要和全球其他国家地区的同学一起，体会多元化的文化。培训内容涉及公司文化，软件开发方法论，敏捷开发实践等，同时还保证学生有足够的代码练习机会。
      <Image image={'TWU2.jpg'}/>
    </p>
    <NavSubTitle title="Buddy&Sponsor"/>
    <p>
      新人入职后，都会被分配一个TA在TW的“领路人”，我们称之为“Buddy”。
      <div className="description"><strong>Buddy（小伙伴）是什么呢？</strong></div>
      <ul className="buddy-sponsor">
        <li>TW文化的典型</li>
        <li>新人分诊台，咨询的窗口</li>
        <li>值得信赖的伙伴</li>
        <li>拥有高效习惯的老师</li>
        <li>安全的反馈渠道</li>
      </ul>
    </p>
    <p>
      入职六个月后，针对顺利转正的员工，只要通过考核，你就有机会成为Sponsor。
      <div className="description"><strong>Sponsor参与什么呢？</strong></div>
      <ul className="buddy-sponsor">
        <li>内部新的机会的建议</li>
        <li>帮助寻找新的资源,创造新的机会</li>
        <li>建议参加的内部外部培训课程</li>
        <li>帮助 sponsee 成为 sponsor</li>
      </ul>
      <Image image={'Buddy&Sponsor.jpg'}/>
    </p>
    <NavSubTitle title="TW中国人才发展计划"/>
    <p>
      随着公司的成长和市场环境的变化，“人才发展”和“能力提升”成为我们这家专业服务公司日益重要的课题。所以公司提出了中国区的人才发展计划，针对不同类型的群体提供了不同的能力提升课程，为大家创造更多学习和成长的机会。
      <Image image={'talent-plan.png'}/>
    </p>
    <p>TL：Team Lead和Tech Lead</p>
    <p>CST：Customer Service Team项目管理铁三角</p>
  </div>
)

export default Training
