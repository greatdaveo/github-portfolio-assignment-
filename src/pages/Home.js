import React from 'react'
import './Home.css'
import User from '../components/User'
import Repository from '../components/Repository'
import {Helmet} from 'react-helmet-async'
import Overview from '../components/Overview'

export default function Home() {
  return (
    
    
    <div className='home'>
      <Helmet>
        <title>Repository</title>
        <meta name='description' content="david olowomeye's github profile"/>
        <link rel='canonical' href='/'/>
      </Helmet>

      <div className='user__page'>
       <User/>
      <Repository />
    </div>

    </div>
  )
}
