import * as React from 'react'
import FirstView from '../../pages-component/home-page/first-view'
import './home-page.css'

const HomePage = ({props}) => {
  document.title = 'Jflix | HomePage'
	return (
    <div className='home-page'>
      <h1>HomePage</h1>
      <FirstView/>
    </div>
	)
}

export default HomePage