import React from 'react'

import Image from '../Image/Image'
import './Speech.less'

const Speech = ({ speech }) => {
  const { topic, speaker, content, image } = speech
  return (
    <p className="speech">
      <div className="text-center">
        <h4 className="topic">
          {`主题：《${topic}》`}
        </h4>
        <div className="speaker">
          {`分享嘉宾：${speaker}`}
        </div>
      </div>
      <div>
        内容：{content}
      </div>
      <Image image={image}/>
    </p>
  )
}

export default Speech