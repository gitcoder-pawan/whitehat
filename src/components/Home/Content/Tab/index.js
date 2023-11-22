import React from 'react'
import './index.css'
const Tab = ({tablist, activeTab, setActiveTab}) => {
  console.log(tablist, activeTab);
  return (
    <div className='home-content-tab'>
      {tablist.map((tab)=><div className={`home-content-tab-box ${activeTab=== tab.name && 'activetab'}`} onClick={()=> setActiveTab(tab.name)}>{tab.title}</div>)}
    </div>
  )
}

export default Tab
