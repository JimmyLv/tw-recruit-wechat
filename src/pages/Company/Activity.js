import React from 'react'

import { NavSubTitle, Image }from '../../components'

const activities = [
  {
    image: 'friday-drink.jpg',
    title: 'Friday Drink',
    intro: '顾名思义，就是在周五晚上一起喝一杯～哈，没有错！在TW这么欢乐的公司怎么会没有啤酒和炸鸡呢！Friday Drink team的小伙伴会组织很多精彩的环节在周五的晚上发生，这绝对是一个月值得期待两次的美食与娱乐盛宴！'
  },
  {
    image: 'office-update.jpg',
    title: 'Office Update',
    intro: '什么才是迅速了解公司所有项目的平台？那一定是每月一次的office update，边吃边听～每个项目的小伙伴都会上台更新自己项目的近况，和大家一起讨论一起分享。同时这还是更多活动的广告时间哦。'
  },
  {
    image: 'family-day.jpg',
    title: 'Family Day',
    intro: '如果你是有家庭，有宝宝的伙伴，那这个活动绝对是为你量身定制的。公司会不定期举办family day，聚集来TW中所有的家庭和宝宝，一起去采摘！一起去烧烤！一起去烘培！一起在跳蚤市场做小小卖家。'
  },
  { image: 'away-day.jpg', title: 'Away Day', intro: '一年一度！三天两夜！抛开工作，尽情狂欢，与各地的小伙伴聚一起，“上蹿下跳”High起来～这样的“思窝”年会才够味嘛！' },
  {
    image: '拓展系列活动.jpg',
    title: '拓展系列活动',
    intro: '由于我们是思想的工作者～所以我们Operation小伙伴的想法也是层出不穷的！跳蚤市场！趣味运动会！烘培day！fashion day！上门按摩！医生坐诊！美甲美瞳！单身联谊！等等～所有奇葩小活动尽在思窝咯！'
  },
]

const renderActivity = ({ image, title, intro }, index)=>(
  <div key={index}>
    <Image image={image}/>
    <p>
      <strong>{title}</strong>
      <div>{intro}</div>
    </p>
  </div>
)

const Activity = () => (
  <div className="container">
    <NavSubTitle title="思窝内部活动"/>
    {activities.map((activity, index) => renderActivity(activity, index))}
    <NavSubTitle title="思窝俱乐部"/>
    <p>
      ThoughtWorks已经组建了十分多元化的俱乐部，各地的俱乐部略有不同，包含不限于“游泳俱乐部” “瑜伽健身俱乐部” “羽毛球俱乐部” “足球篮球俱乐部” “KTV俱乐部” “户外俱乐部” “手工俱乐部” “烘培俱乐部” 等等等等，免费加入，不收取任何“保护费”！
    </p>
    <p>
      <Image image={'篮球与户外俱乐部.jpg'} title={'篮球与户外俱乐部'}/>
      <Image image={'手工和烘培俱乐部.jpg'} title={'手工和烘培俱乐部'}/>
    </p>
  </div>
)

export default Activity
