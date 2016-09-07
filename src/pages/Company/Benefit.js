import React from 'react'

import { NavSubTitle }from '../../components'

import './Benefit.less'

const Benefit = () => (
  <div className="container Benefit">
    <NavSubTitle title="基本福利"/>
    <table className="table">
      <tbody>
      <tr>
        <th>五险一金</th>
        <td>按照国家规定缴纳五险一金，TW的公积金缴纳比例是公司12%+个人12%</td>
      </tr>
      <tr>
        <th>商业保险（包含员工、配偶和子女）</th>
        <td>补充医疗保险，保险可覆盖意外伤害、重大伤病、综合医疗费用的报销</td>
      </tr>
      <tr>
        <th>体检</th>
        <td>每年都有全面的健康检查</td>
      </tr>
      </tbody>
    </table>

    <NavSubTitle title="假期福利"/>
    <table className="table">
      <tbody>
      <tr>
        <th>年假</th>
        <td>每年至少10天全薪年假（年假数量依据员工在公司就职时间相应增加）</td>
      </tr>
      <tr>
        <th>年资假</th>
        <td>在TW连续工作满10年的员工，可享受12周的全薪假</td>
      </tr>
      <tr>
        <th>病假</th>
        <td>员工每年可享受的全薪病假最长为15个工作日</td>
      </tr>
      <tr>
        <th>产检假，哺乳假，Working at home（女员工）</th>
        <td>妊娠阶段公司提供带薪产检假，婴儿出生后一年之内每天1小时的带薪哺乳假，孩子3岁内每周一天working in home</td>
      </tr>
      </tbody>
    </table>

    <NavSubTitle title="其他福利"/>
    <table className="table">
      <tbody>
      <tr>
        <th>3.8 妇女节、端午节、中秋节、春节等</th>
        <td>节日礼物</td>
      </tr>
      <tr>
        <th>生日</th>
        <td>生日福利</td>
      </tr>
      <tr>
        <th>水果饮料等供应</th>
        <td>每天2次水果</td>
      </tr>
      <tr>
        <th>特殊午、晚餐</th>
        <td>发起或参与各种话题的分享，公司赞助餐</td>
      </tr>
      <tr>
        <th>Anniversary gift</th>
        <td>员工纪念日礼品卡</td>
      </tr>
      <tr>
        <th>Buddy lunch</th>
        <td>在加入的前6个月，享受Buddy机制及Buddy lunch</td>
      </tr>
      <tr>
        <th>Sponsor lunch</th>
        <td>在加入的6个月以后，享受Sponsor机制及Sponsor lunch</td>
      </tr>
      <tr>
        <th>Team building</th>
        <td>团队建设的基金</td>
      </tr>
      <tr>
        <th>Training budget</th>
        <td>每年2000元的培训经费</td>
      </tr>
      <tr>
        <th>Club基金</th>
        <td>篮球、足球、兵乓球、美甲、瑜伽、手工、游泳、桌游等兴趣小组活动可以自主组织</td>
      </tr>
      </tbody>
    </table>
  </div>
)

export default Benefit
