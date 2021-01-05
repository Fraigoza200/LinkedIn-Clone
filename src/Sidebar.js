import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

const Sidebar = () => {


    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    const user = useSelector(selectUser)

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.pexels.com/photos/3394939/pexels-photo-3394939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <Avatar src={user.photoUrl} className='sidebar__avatar'>
                    {user.email[0]}
                     </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                  <p>Who viewed you</p>  
                  <p className='sidebar__statNumber'>2.543</p>  
                </div>
                <div className="sidebar__stat">
                  <p>Views on post</p>  
                  <p className='sidebar__statNumber'>2.454</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
