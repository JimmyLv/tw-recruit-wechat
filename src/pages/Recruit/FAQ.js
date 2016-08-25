import React from 'react'

import NavSubTitle from '../../components/NavSubTitle'
import './FAQ.less'

const renderFAQ = ({ question, answer }, index) => (
  <li key={index}>
    <strong>{question}</strong>
    <div>{answer}</div>
  </li>
)

const questions = [
  { question: '公司有针对新员工的培训项目吗？', answer: '公司会从你接受Offer起就制订一系列的培训课程，包括在印度与其他十几个国家毕业生一起参与的毕业生培训。入职后一对一的小伙伴帮助计划也是帮你快速成长及融入新环境的最佳方式。' },
  { question: '如被录用，能否提前到公司实习？', answer: '各个城市的办公室对实习生需求不同，愿意实习的同学可在征求学校和导师同意后与你所在城市的HR沟通。' },
  { question: '如果在应聘的过程中被拒，是否会有相关通知？', answer: '在应聘过程中如果被拒，我们会发邮件到同学的注册邮箱；同时也可以登录我们的校招平台查看个人应聘状态。' },
  { question: '2016年校园招聘整个流程有多久？', answer: '10天左右，10月底前后将对拟录用的同学发录用通知。' },
  { question: '怎样知道简历通过初步筛选得到笔试或面试机会呢？', answer: '简历通过的同学，将在宣讲会开始前提前收到公司的宣讲会及笔试手机短信邀请。通过每一轮的同学也会在2天内收到下一轮的短信通知；同时也可以在我们的校招平台查询个人状态信息。' },
  {
    question: '假如我在成都，但是毕业后想去西安工作，我应该申请哪个城市的流程？我对最终的工作城市是否有自主选择权？',
    answer: 'ThoughtWorks各城市校招流程相同，你无须专程前往你想工作的城市参加招聘流程，只需在当地就近参加即可。录用后会根据你的工作城市意向来和你商议最终工作地点滴。'
  },
  { question: '我们学校不在公司校园招聘所在的城市列表中，我可以报名参加吗？', answer: '当然可以啦！在哪里都可以申请。你可以就近选择城市和学校参加宣讲及校招流程。' },
]

const questions2 = [
  { question: '我是往届的毕业生，能参加2016年校园招聘吗?', answer: '校园招聘只针对应届毕业生，今年校招具体指2016年毕业的应届毕业生。如果是往届生，请参加我们的社招流程哈~~' },
  {
    question: '校园招聘宣讲会现场是否接受简历申请？',
    answer: '很抱歉，宣讲会现场不接受简历。同学们需要在参加宣讲会之前在线注册简历成功，以确保可以及时参加校招流程并获知ThoughtWorks校园行的任何更新。若参加宣讲会前没有注册简历，请于之后立即在ThoughtWorks校园招聘网站上注册。'
  },
  {
    question: 'ThoughtWorks校园招聘网上申请有期限的限制吗？',
    answer: '2016校园招聘宣讲会之前提交简历都是有效的哦。宣讲会当天结束后就安排笔试，具体时间我们会在微信，微博和校园BBS等平台发布。请关注！过了截止时间，虽然还可以在线注册简历，遗憾的是，我们将无法考虑你的应聘申请了。'
  },
  { question: '对应聘者的条件有什么要求呢？', answer: '专业，院校，是否211，男生还是女生，英语水平如何都没有限制。只要你是热爱软件行业，充满正能量的人~~' },
]

const Position = () => (
  <div className="container FAQ">
    <NavSubTitle title="FAQ"/>
    <ol className="faq-list">
      <li>
        <strong>如果对ThoughtWorks校园招聘有问题，有什么方式可以咨询吗？</strong>
        <div>可以通过TW招聘微博@ThoughtWorks招才猫姐咨询，或者添加校招微信账号：thoughtworks_hr;或登录校园招聘系统留言以及宣讲会互动问答环节提问，工作人员也可为你答疑解惑。</div>
      </li>
      <li>
        <strong>如被录用，档案户口落在哪里？什么时候可以入职？</strong>
        <ul>
          <li>
            落户、调档遵循自愿原则，公司不做强制要求。如果希望将户口档案落在工作所在地，HR会帮助大家办理户口档案相关事项。入职时间根据个人毕业时间可以商议，一般集中在4月或者7月。
          </li>
          <li>
            根据北京市政府的相关政策，不能为非京籍学生办理落户安置和将档案迁到北京的业务。给同学们的建议就是将档案和户口迁回老家，这样方便操作，而且能保证档案的安全性。
          </li>
          <li>
            不管学生的户口和档案在哪，公司都会为学生缴纳五险一金。
          </li>
        </ul>
      </li>
      {questions.map((faq, index) => renderFAQ(faq, index))}
      <li>
        <strong>2016 ThoughtWorks校园招聘将去哪些学校捏？</strong>
        <div>校园行覆盖西安、成都、武汉、北京四个城市。</div>
        <ul className="faq-highlight">
          <li>成都行：四川大学望江校区，四川大学江安校区，成都电子科技大学清水河校区</li>
          <li>西安行：西北大学本部，西北工业大学本部，西安电子科技大学本部，西安交通大学本部</li>
          <li>武汉行：武汉大学，武汉华中科技大学</li>
          <li>北京行：北京交通大学，北京理工大学</li>
        </ul>
      </li>
      {questions2.map((faq, index) => renderFAQ(faq, index))}
      <li>
        <strong>公司本次的招聘岗位及数量如何?有什么限制吗？</strong>
        <div className="faq-highlight">西安、成都、武汉、北京四地各招聘30+毕业生，招聘职位为软件开发工程师及技术领导管培生，每个职位不设具体名额。</div>
      </li>
      <li>
        <strong>2017 校园招聘宣讲会和笔试在什么时候开始？</strong>
        <div><p className="faq-highlight">西安将会在9月21-24号这周进行，十一假期之后，武汉，成都，北京三地校园行同步进行，同学们要及时关注校招网站内公告栏里的宣讲日期，做好准备噢。</p>同时也请关注ThoughtWorks微信平台和新浪微博@ThoughtWorks招才猫姐，或者添加校招微信账号：thoughtworks_hr及时了解校招相关信息。
        </div>
      </li>
    </ol>
  </div>
)

export default Position
