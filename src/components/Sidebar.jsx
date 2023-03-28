import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {

    const recentItem =(topic)=> 
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Ibukun Peter</h2>
        <h4>ibk@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('prgramming')}
        {recentItem('softwareengineering')}
        {recentItem('Design')}
        {recentItem('developer')}
      </div>
    </div>
  );
};

export default Sidebar;
