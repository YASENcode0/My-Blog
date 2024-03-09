import React from 'react'
import NavBar from './NavBar'
import Loading from './Loading'
import Post from './Post'


export default function Home() {
  return (
    <div>
        <Loading/>
        <NavBar/>
        <div id='HomeDiv'>
         <Post/>
        </div>
    </div>
  )
}
