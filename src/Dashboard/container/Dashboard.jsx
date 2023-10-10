import React, { useState } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import SideNavLarge from '../components/SideNavLarge'

export default function Dashboard() {

  const [state,setState] = useState(false)

  const handleClick = () => {
    setState((prevState) => !prevState);

  }

  return (
    <div className='flex'>
      {state ? <SideNavLarge buttonClicked={handleClick} /> : <SideNav buttonClicked={handleClick} />}
      <Header />
    </div>
  )
}
