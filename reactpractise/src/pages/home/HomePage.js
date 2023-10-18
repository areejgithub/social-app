import React from 'react'
import Topbar from '../../Components/topbar/Topbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Feed from '../../Components/feed/Feed'
import Rightbar from '../../Components/rightbar/Rightbar'
import "./home.css"
// import WindowAndDoor from '../../Components/windowAnddoor/WindowAndDoor'
export default function HomePage() {
  return (
    <>
    <Topbar/>
    {/* <WindowAndDoor/> */}
    
    <div className='homeContainer'>
      
     <Sidebar/>
     <Feed/>
     <Rightbar/>
    </div>
   
    </>
   
  )
}
