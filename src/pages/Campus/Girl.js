import React from 'react'

import NavSubTitle from '../../components/NavSubTitle'
import Image from '../../components/Image'
import Speech from '../../components/Speech'
import './index.less'

const speeches = [
  {
    image: 'girl-女生活动2.jpg',
    topic: '化被动为主动',
    speaker: '李澍雯',
    content: '澍雯用讲故事的方式给大家分享了自己从被动的接受实习机会，再到积极主动的抓住机会去实习，通过Open Day了解到ThoughtWorks，然后定下目标立志来ThoughtWorks。通过自己的努力加入到ThoughtWorks后，突破自我实现不断进步。通过自己的故事分享，希望能够告诉小学妹们：要化被动为主动，找寻自己的喜好，找到目标，向着目标努力，总会有意想不到的收获。'
  },
  {
    image: 'girl-女生活动3.jpg',
    topic: '遇见未来的自己',
    speaker: '亢江妹',
    content: '江妹给大家讲述了公司一些成功女程序员，她们一路走来的经历，有一些如今都已经做了妈妈，但是毫不影响工作，依旧那么的优秀。江妹让这几位女前辈每个人送一句话给小学妹们，比如雅娟说的，“不要给自己设限，做自己最喜欢的事情~”'
  },
]

const Girl = () => (
  <div className="container">
    <NavSubTitle title="校园女生活动"/>
    <div className="coding-description">
      <p>ThoughtWorks努力倡导男女比例1:1，通过进入校园给女生们进行面对面的职场辅导与交流，思窝希望可以帮助越来越多的菇娘爱上技术，在技术的路上坚持走下去~~~</p>
      <div className="coding-benefit"><strong>你将获得：</strong></div>
      <ul>
        <li>你可以听到 IT程序媛职场心路历程发生了怎样的变化？</li>
        <li>你也可以近距离与IT公司不同职位的女性从业者沟通，了解神秘工作背后的点点滴滴。</li>
        <li>你可以听到同龄女生，走出象牙塔，初入职场的心路历程。</li>
      </ul>
      <p>青春不再迷茫；<br/>姑娘们，在这里遇见未来的自己！！！</p>
      <Image image={'girl-女生活动1.jpg'}/>
      <p>ThoughtWorks进入电子科技大学、四川大学、成都信息工程大学等高校与校园女生展开职场互动交流，通过相关主题分享帮助女生更勇敢和坚定地选择自己的职场方向。</p>
      {speeches.map((speech, index) => <Speech key={index} speech={speech}/>)}
      <p>最后是Open Space环节，参加活动的同学们，都积极的就自己最关心、最感兴趣的问题与我们的嘉宾们积极的交流，探讨。</p>
      <Image image={'girl-女生活动4.jpg'}/>
    </div>
  </div>
)

export default Girl
