import React, { useState } from 'react'
import './index.css'
import Tab from './Tab'
import TabContent from './TabContent'
import StaticTabContent from './StaticTabContent'
const tablist = [
  {
    name: 'videos',
    title: 'Videos',
  },
  {
    name: 'classroom',
    title: 'Classroom',
  },
  {
    name: 'whiteboard',
    title: 'Whiteboard',
  }
]
const Content = () => {
  const [activeTab, setActiveTab] = useState('videos')

  return (
    <div>
      <Tab tablist={tablist} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <div className='home-tab-content'>
        <StaticTabContent/>
        <TabContent activeTab={activeTab}/>
      </div>
    </div>
  )
}

export default Content
