import React from 'react'

import NavSubTitle from '../../components/NavSubTitle'
import Image from '../../components/Image'
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
  { question: '如果在应聘的过程中被拒，是否会有相关通知？', answer: '在应聘过程中如果被拒，我们会发邮件到同学的注册邮箱；同时也可以登录我们的校招平台或者我们的校招微信公众号查看个人应聘状态。' },
  { question: 'ThoughtWorks 2017校园招聘整个流程有多久？', answer: '10天左右，10月底前后将对拟录用的同学发录用通知。' },
  { question: '怎样知道简历通过初步筛选得到笔试或面试机会呢？', answer: '简历通过的同学，将在宣讲会开始前提前收到公司的宣讲会及笔试手机短信邀请。通过每一轮的同学也会在2天内收到下一轮的短信通知；同时也可以在我们的校招平台和校园招聘官方微信查询个人状态信息。' },
  {
    question: '假如我在成都，但是毕业后想去西安工作，我应该申请哪个城市的流程？我对最终的工作城市是否有自主选择权？',
    answer: 'ThoughtWorks各城市校招流程相同，你无须专程前往你想工作的城市参加招聘流程，只需在当地就近参加即可。录用后会根据你的工作城市意向来和你商议最终工作地点滴。'
  },
  {
    question: '我们学校不在公司校园招聘所在的城市列表中，我可以报名参加吗？',
    answer: '当然可以啦！在哪里都可以申请。你可以就近选择城市和学校参加宣讲及校招流程。'
  },
  {
    question: '我所在城市没有ThoughtWorks办公室，怎么办呢？',
    answer: '如果你所在的城市没有举行ThoughtWorks校园宣讲会，（我们校招宣讲的城市包括：成都、西安、武汉、北京）请选择这四所分公司任选其一参加面试。HR姐姐们也不希望童鞋们舟车劳顿太累哦，请尽量选择离自己地理位置最近的城市，所以简历投递时请认真☑️相应的”面试城市“和”期望工作城市“哦。'
  },
  {
    question: '我现在在英国，本月赶不及回国参加面试，怎么办呢？',
    answer: '由于地理位置太远，没有办法去到这四所城市（成都、西安、武汉、北京）参加面试，我们会有工作人员定向联系你安排远程面试。那么简历投递时请确保邮箱和手机号正确，☑️异地面试选项并选择好未来期望工作城市。'
  },
]

const questions2 = [
  { question: '我是往届的毕业生，能参加今年的校园招聘吗?', answer: '校园招聘只针对应届毕业生，今年校招具体指2017年毕业的应届毕业生。如果是往届生，请参加我们的社招流程哈~~' },
  {
    question: '校园招聘宣讲会现场是否接受简历申请？',
    answer: '很抱歉，宣讲会现场不接受简历。同学们需要在参加宣讲会之前在线注册简历成功，以确保可以及时参加校招流程并获知ThoughtWorks校园行的任何更新。若参加宣讲会前没有注册简历，请于之后立即在ThoughtWorks校园招聘网站上注册。'
  },
  {
    question: 'ThoughtWorks 2017 校园招聘网上申请有期限的限制吗？',
    answer: '2017校园招聘宣讲会之前提交简历都是有效的哦。宣讲会当天结束后就安排笔试，具体时间我们会在微信，微博和校园BBS等平台发布。请关注！过了截止时间，虽然还可以在线注册简历，遗憾的是，我们将无法考虑你的应聘申请了。'
  },
  { question: '对应聘者的条件有什么要求呢？', answer: '专业，院校，是否211，男生还是女生，英语水平如何都没有限制。只要你是热爱软件行业，充满正能量的人~~' },
]

const Position = () => (
  <div className="container FAQ">
    <NavSubTitle title="FAQ"/>
    <ol className="faq-list">
      <li>
        <strong>如果对ThoughtWorks校园招聘有问题，有什么方式可以咨询吗？</strong>
        <p>可以关注TW校招微信 <span className="faq-keyword">@ThoughtWorks校园招聘</span> 与我们联系，或者通过TW招聘微博 <span className="faq-keyword">@ThoughtWorks招才猫姐</span>
          咨询；或登录校园招聘系统留言以及宣讲会互动问答环节提问，工作人员也可为你答疑解惑。</p>
      </li>
      <li>
        <strong>如被录用，档案户口落在哪里？什么时候可以入职？</strong>
        <ul>
          <li>落户、调档遵循自愿原则，公司不做强制要求。如果希望将户口档案落在工作所在地，HR会帮助大家办理户口档案相关事项。入职时间根据个人毕业时间可以商议，一般集中在4月或者7月。
          </li>
          <li>根据北京市政府的相关政策，不能为非京籍学生办理落户安置和将档案迁到北京的业务。给同学们的建议就是将档案和户口迁回老家，这样方便操作，而且能保证档案的安全性。
          </li>
          <li>不管学生的户口和档案在哪，公司都会为学生缴纳五险一金。
          </li>
        </ul>
      </li>
      {questions.map((faq, index) => renderFAQ(faq, index))}
      <li>
        <strong>ThoughtWorks 2017 校园招聘将去哪些学校捏？</strong>
        <div>校园行覆盖西安、成都、武汉、北京四个城市。</div>
        <ul>
          <li>成都行：四川大学望江校区，成都电子科技大学清水河校区</li>
          <li>西安行：西北大学本部，西北工业大学本部，西安电子科技大学本部，西安交通大学本部</li>
          <li>武汉行：武汉大学，武汉华中科技大学</li>
          <li>北京行：北京交通大学，北京理工大学</li>
        </ul>
      </li>
      {questions2.map((faq, index) => renderFAQ(faq, index))}
      <li>
        <strong>公司本次的招聘岗位及数量如何?有什么限制吗？</strong>
        <div>西安、成都、武汉、北京四地各招聘30+毕业生，招聘职位为软件开发工程师、软件测试工程师及技术领导管培生，每个职位不设具体名额。</div>
      </li>
      <li>
        <strong>ThoughtWorks是一家什么公司？</strong>
        <div>
          <p>
            ThoughtWorks，中文名称「思特沃克软件技术有限公司」，是一家全球软件设计与定制的领袖企业。ThoughtWorks 自成立以来，一直处于技术和思想的前沿，致力于用软件技术帮忙客户解决棘手的问题，以获得商业上的成功！每一个 ThoughtWorker
            心中也都有用软件知识和技术使整个人类社会变得更美好的梦想！
            <br/>
            关于公司详细信息可登录官网进行浏览：<br/><a href="http://www.thoughtworks.com/cn">http://www.thoughtworks.com/cn</a>
          </p>
        </div>
      </li>
      <li>
        <strong>2017 校园招聘宣讲会和笔试在什么时候开始？</strong>
        <p>
          西安，武汉，成都，北京四地校园行将在十月十日左右同步进行，同学们要及时关注校招网站内公告栏里的宣讲日期，做好准备噢。
          同时也请关注校园招聘微信平台 <span className="faq-keyword">@ThoughtWorks校园招聘</span> 和新浪微博 <span className="faq-keyword">@ThoughtWorks招才猫姐</span>
          及时了解校招相关信息。
        </p>
      </li>
    </ol>
    <Image image={'wechat-qrcode.jpg'}/>
  </div>
)

export default Position
