import React from 'react'
import {Header} from '../Components/Header'
import {Story} from '../Components/Story'
import {Feed} from '../Components/Feed'
import {Suggestion} from '../Components/Suggestion'
import {Footer} from '../Components/Footer'



export const Home = () => {
  return (
    <div>
        <Header></Header>
        <div>
            <Story></Story>
            <Feed></Feed>
        </div>
        <div>
            <Suggestion></Suggestion>
            <Footer></Footer>
        </div>
    </div>
  )
}
