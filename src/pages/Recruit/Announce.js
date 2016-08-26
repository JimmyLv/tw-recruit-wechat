import React from 'react'

import NavSubTitle from '../../components/NavSubTitle'

import './Announce.less'

const Announce = () => (
  <div className="container Announce">
    <NavSubTitle title="校招动态"/>
    <p>
      <div className="sub-title">ThoughtWorks 2017校园招聘全面启动！</div>
      <ol>
        <li><strong>面向人群</strong>：2017应届毕业生</li>
        <li><strong>招聘职位</strong>：软件开发工程师、软件测试工程师、技术领导管培生</li>
        <li><strong>应聘方式</strong>：登陆 <a href="http://join.thoughtworks.cn">http://join.thoughtworks.cn</a> 注册并投递简历！</li>
      </ol>
    </p>

  </div>
)

export default Announce
