import React from 'react'

import { NavSubTitle, Image, Person }from '../../components'

import './Introduction.less'

const pillars = [
  { title: ' 经营可持续的业务', image: 'sustainable.png' },
  { title: ' 推动IT变革，追求软件卓越 ', image: 'award.png' },
  { title: ' 积极提倡社会和经济公正', image: 'social-economic-justice.png' },
]

const people = [
  { image: 'MartinFowler.png', position: '首席科学家', intro: '他是当今世界软件开发领域最具影响力的五位大师之一。他改变了人类开发软件的模式，他被开发者们尊为“教父”。' },
  { image: 'RebeccaParsons.png', position: '首席技术官', intro: 'ThoughtWorks Global CTO，同时也是敏捷委员会董事之一。' },
  { image: '熊杰.png', position: '全球医疗业务，总监架构师', intro: '他从2003年开始实践敏捷方法，之后曾为国内多家企业提供敏捷实施的咨询服务。' },
  {
    image: '徐昊.png',
    position: '中国区首席技术专家，全球技术策略顾问',
    intro: '他从2003年起开始实践极限编程等敏捷方法，2005年开始，多次以敏捷教练的角色帮助国内外多个团队实施极限编程、Scrum和FDD等敏捷方法，敏捷交付和敏捷项目管理经验极为丰富。'
  },
  { image: '夏洁.png', position: '中国区人力资源负责人，新加坡董事总经理', intro: '她从2005年加入ThoughtWorks，十年来在人力资源、软件业务分析、项目管理、客户关系建立以及办公室／区域运营等领域都扮演了重要的角色。' },
  { image: '杨云.png', position: '首席咨询师', intro: '《深入理解Scala》译者，多年来致力于推广函数式编程思想在工业界的应用。资深架构师，在2011年建立haskell函数式编程社群，在实际工业项目中有丰富的Scala使用经验。' },
]

const renderPillars = ({ title, image }, index) => (
  <div key={index} className="col-xs-4">
    <Image image={image}/>
    <div>{title}</div>
  </div>
)

const Introduction = () => (
  <div className="container Introduction">
    <NavSubTitle title="公司介绍"/>
    <p>
      ThoughtWorks是一家全球技术信息服务公司，在美国，英国，澳大利亚，德国，新加坡，印度，巴西，南非，中国，厄瓜多尔，土耳其等十几个国家中，她成为超过3000技术牛人的实践乐园。
    </p>
    <p>
      在进入中国十年中，分别在北京，上海，深圳，西安，成都和武汉成立了分公司 ，有接近700名员工通过全球资源共享和人才交流，服务全球各行业的顶尖客户。
    </p>
    <p>
      ThoughtWorks不仅仅是一家软件公司，同时也是一个社区：我们汇集满怀激情的软件精英，通过技术和客户共同应对最艰巨的挑战。同时我们寻求IT行业的革新，并致力于对社会产生积极的影响力。
    </p>
    <Image image={'公司介绍.png'}/>

    <NavSubTitle title="公司发展历程"/>
    <Image image={'公司发展历程.png'}/>

    <NavSubTitle title="公司使命"/>
    <div>
      <p>
        ThoughtWorks的使命是通过软件创造人类更美好的明天，倡导社会责任感，创造公平公正的经济环境。我们引领最具天赋和积极性的ThoughtWorkers致力于：
      </p>
      {pillars.map((pillar, index) => renderPillars(pillar, index))}
      <p>
        这是支撑我们的商业模式的三大核心支柱，他们是ThoughtWorks的基石，影响着我们所做出的每一项决策。
      </p>
    </div>

    <NavSubTitle title="公司核心业务"/>
    <p>
      1、<strong>交付</strong>：研发人员会为客户量身定制软件开发解决方案，同时也会直接为客户交付这些最具核心价值的软件。在开发过程中，很多客户为以被ThoughtWorks影响为荣，他们的CTO、技术高管会轮换在我们的办公室里一直和我们一起工作，紧密交流和沟通，共同交付。
    </p>
    <p>
      2、<strong>咨询培训</strong>：咨询师会在客户现场，帮助改善企业的IT组织，改进软件开发方法，以软件带动企业业务发展。我们的咨询类型包括：IT组织优化- 技术咨询- 测试策略- 客户体验- 敏捷转型。
    </p>

    <NavSubTitle title="思窝牛人在身边"/>
    <p>
      ThoughtWorks汇聚了一批全球最高水准的软件专家，他们不仅帮助客户解决那些最具挑战性的难题，而且在整个软件技术社区具有巨大的影响力。以下是他们之中的几位佼佼者：
    </p>
    <div>
      {people.map((p, index) => <Person key={index} image={p.image} position={p.position} intro={p.intro}/>)}
    </div>
    <NavSubTitle title="更多了解ThoughtWorks"/>
    <p>
      <video width="100%" controls="true">
        <source
          src="http://182.131.9.172/vhot2.qqvideo.tc.qq.com/v0310xz6qkr.m701.mp4?sha=99C0EFDD1B194C962CD3DA126433189B2C16943D&vkey=4C3CB5893476FCCE69694A06E9FC3555704F84C5B99895A391BEF0D467EBDF1EC0B3BA46823C25AC8DEA8EF8C0CA65B274024EA30223A73CB6362D45AB170F53F27FABE7D9BE590A2DD6906C7DCEDC7A8E0DEC1692CAF5CD"
          type="video/mp4"/>
      </video>
      {/*<iframe className="col-sm-12 col-xs-12" src="http://v.qq.com/iframe/player.html?vid=v0310xz6qkr&tiny=0&auto=0"></iframe>*/}
      {/*<a className="text-center" href="http://v.qq.com/page/v/k/r/v0310xz6qkr.html">http://v.qq.com/page/v/k/r/v0310xz6qkr.html</a>*/}
    </p>
  </div>
)

export default Introduction
