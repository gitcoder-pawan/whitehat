import React from 'react'
import './index.css'
import Videos from './Videos'
import Whiteboard from './Whiteboard'
import Classroom from './Classroom'
const TabContent = ({activeTab}) => {
  return (
    <div className='home-tab-tab_content'>
      {activeTab === 'videos' && <Videos/>}
      {activeTab === 'whiteboard' && <Whiteboard/>}
      {activeTab === 'classroom' && <Classroom/>}
    </div>
  )
}

export default TabContent
