import React from 'react'

import NavSubTitle from '../../components/NavSubTitle'
import './Position.less'

const Position = () => (
  <div className="container">
    <NavSubTitle title="软件开发工程师"/>
    <div className="roles">
      <div className="role-description"><strong>工作地点：</strong></div>
      <span className="address">北京、西安、成都、武汉</span>
      <div className="role-description"><strong>ThoughtWorks需要你：</strong></div>
      <ul>
        <li>进行系统框架和代码的实现</li>
        <li>自动化单元测试，集成测试的实现</li>
        <li>参与自动化部署流水线的实现与维护</li>
        <li>解决开发过程中的技术问题</li>
        <li>参与系统的需求调研和需求分析，扩大视野</li>
      </ul>
      <div className="role-description"><strong>我们期望你是：</strong></div>
      <ul>
        <li>具备良好的团队协作意识，主动思考，自我驱动，热爱学习，能够在压力下高效工作，以结果和行动为准则，努力追求成功</li>
        <li>具备扎实的软件工程知识，包括设计、开发和测试的相关流程</li>
        <li className="no-justify">熟练掌握一种以上主流开发语言(C/C++/C#/Java/Ruby/Python)或Web开发技术(主流开发框架/HTML/CSS/JavaScript等)</li>
        <li>善于沟通，能够成为一名积极、乐于分享的团队成员</li>
      </ul>
    </div>

    <NavSubTitle title="软件测试工程师"/>
    <div className="roles">
      <div className="role-description"><strong>工作地点：</strong></div>
      <span className="address">北京、西安、成都、武汉</span>
      <div className="role-description"><strong>ThoughtWorks需要你：</strong></div>
      <ul>
        <li>跟不同角色沟通，确保团队对需求理解的一致性</li>
        <li>设计测试用例并执行</li>
        <li>设计和实现功能测试自动化</li>
        <li>报告、管理和分析缺陷</li>
        <li>宏观掌控项目产品质量信息，并及时反馈给团队</li>
      </ul>
      <div className="role-description"><strong>我们期望你是：</strong></div>
      <ul>
        <li>熟悉至少一种编程语言，有一定的编码能力</li>
        <li>具备基本的数据库操作能力</li>
        <li>拥有快速理解业务的能力</li>
        <li>具备很强的分析能力和定位问题的能力</li>
        <li>具备良好的沟通表达能力，包括口头和书面沟通</li>
        <li>踏实、认真、细心，并对软件测试工作有浓厚的兴趣</li>
      </ul>
    </div>

    <NavSubTitle title="技术领导管培生"/>
    <div className="roles">
      <div className="role-description"><strong>工作地点：</strong></div>
      <span className="address">北京、西安、成都、武汉</span>
      <div className="role-description"><strong>什么是管理培训生计划？</strong></div>
      <p>
        管培生计划指公司招聘具有最高相关潜力的毕业生，作为未来的管理层预备队，并为他们特别打造的小而精的系统性培养计划。计划的实施，通常由公司最高水准的相关领导者直接负责，通过整合各种公司资源，帮助其有计划有针对性的轮岗，完成对公司业务的全面了解。同时，会挖掘其深度和视野，帮助其最快速成长承担重要的责任。
      </p>
      <p>由于管理委培会占用公司大量的资源，通常会有更严格的考核和退出机制，在薪资上也会做出相应的补充</p>
      <div className="role-description"><strong>ThoughtWorks的技术管培生是一种什么样的体验？</strong></div>
      ThoughtWorks招聘的技术领导管培生：与其他公司的管培生略有不同，我们要培养技术领导者，即一家信息技术服务公司的：Solution Architect（解决方案架构师），Account Tech Principal（客户技术领导者）。主要能力包括：
      <ul>
        <li>全面深入的技术能力</li>
        <li>管理技巧、变革管理能力</li>
        <li>出色的客户沟通能力</li>
      </ul>
      因此，此职位由中国区首席技术官（CTO）徐昊直接负责培养，通过提供有计划有针对性的轮岗，帮助完成对公司业务的全面了解，并培养足够深度和广度的技能技巧，为未来工作做好准备。
      <div className="role-description"><strong>为什么要加入ThoughtWorks管培生计划？</strong></div>
      因为，在未来两年，你将通过努力获得：
      <ol>
        <li>中国区首席技术官对你职业发展的全面及亲自辅导，他也将根据你发展的需要而安排项目和专项导师。</li>
        <li>彻底了解咨询公司的各种业务上下文，最佳实践和运营方式</li>
        <li>广泛的技术视野和深厚的实践经验，及设计方案和驱动变革的能力</li>
        <li>接触和对话各大公司中高层技术及其他管理者的机会和能力</li>
        <li>更具有竞争力的薪酬</li>
      </ol>
      <div className="role-description"><strong>我们期望你是</strong></div>
      <ul>
        <li>非常热爱技术，有扎实的编程基础，有一些小雏形产品可以秀一下就更好咯</li>
        <li>学习能力非常强，非常欢迎自学成才的你</li>
        <li>会花很多时间写代码、看技术书籍</li>
        <li>喜欢讨论技术，分享技术</li>
        <li>重视对于团队合作</li>
        <li>有扩大视野的渴望，希望未来的几年里挑战不同的技术</li>
      </ul>
      <div className="role-description"><strong>同样，在这特别的机遇背后，也面临着严峻的挑战：</strong></div>
      <ol>
        <li>每月一次的综合反馈、每季度一次的表现评估，三次不达标，则遗憾的说：你需要离开ThoughtWorks</li>
        <li>80%时间，你在各地出差，或在云端飞行</li>
      </ol>
    </div>
  </div>
)

export default Position
