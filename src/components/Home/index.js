import React from 'react'
import Header from './Header'
import Content from './Content'

const Home = () => {
  return (
    <div>
      {/* <div className='header'>header</div>
      <div className='content'>
        <div>tab</div>
        <div>
          <div>Tab content</div>
          <div>static tab content </div>
        </div>
      </div> */}
      <Header/>
      <Content/>
    </div>
  )
}

export default Home
