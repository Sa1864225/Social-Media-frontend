import React from 'react'
import {Header} from '../Components/Header'
import {Story} from '../Components/Story'
import {Feed} from '../Components/Feed'
import {Suggestion} from '../Components/Suggestion'
import {Footer} from '../Components/Footer'
import '../Styles/Home.css'



export const Home = () => {
  return (
    <div className='Home'>
        <Header></Header>
        <div className='Story-Feed'>
            <Story></Story>
            <Feed></Feed>
        </div>
        <div className='Suggestion-footer' >
            <Suggestion></Suggestion>
            <Footer></Footer>
        </div>
    </div>
  )
}
