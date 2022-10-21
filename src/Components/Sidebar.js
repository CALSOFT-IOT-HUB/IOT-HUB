import React from 'react'
import '../App.css'
// import penciledit from"../../public/icons/pencil-edit@2x.png"
const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className='Sidebar-item_1'>
        <img src="https://www.globalsign.com/application/files/7416/3763/0034/General_Banner_WhatisIOT_4_APAC_2021_11_22.jpg" alt="profilepicture"/>
        <p>IOT HUB</p>
        </div>
      <div className='Sidebar-item_2'>
        <img src="/icons/pencil-edit.png" alt="sidebar_img"></img>
        <img src="/icons/inbox.png"  alt="sidebar_img"></img>
        <img src="/icons/bookmark.png"  alt="sidebar_img"></img>
        <img src="/icons/share.png"  alt="sidebar_img"></img>
        <img src="/icons/download.png"  alt="sidebar_img"></img>
        <img src="/icons/printer.png"  alt="sidebar_img"></img>
        <img src="/icons/settings.png"  alt="sidebar_img"></img>
        </div>

    </div>
  )
}

export default Sidebar