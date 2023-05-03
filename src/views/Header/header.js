import React, { useState } from "react";
import { Avatar, Image, Button } from 'antd';
import {
    BellOutlined,MailOutlined,SearchOutlined
  } from '@ant-design/icons';

const HeaderTop = () => {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        
        //Toggle Nav
        burger.addEventListener('click', ()=>{
          nav.classList.toggle('nav-active');
          
          //Animate Links
          navLinks.forEach((link, index)=>{
            if(link.style.animation){
              link.style.animation = ''
            }else{
                  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      
            }
          });
          
          //burger animation
          burger.classList.toggle('toggle');
          
          
        });
        
        
        
        
      }
      
    //   navSlide();
    return (
      <>
       <nav>
  <div class="logo">
    <h5>Super Admin</h5>
  </div>
  <ul class="nav-links">
    <li><Button icon={<SearchOutlined />} size="large" className="search-btn"  /></li>
    <li><MailOutlined  className="nav-links-icons"/></li>
    <li>< BellOutlined className="nav-links-icons" /></li>
    <li><Avatar
      src={
        <Image
          src="https://joeschmoe.io/api/v1/random"
          style={{
            width: 32,
          }}
        />
      }
    /></li>
  </ul>
  <button class="burger" onClick={navSlide} >
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </button>
</nav>
      </>
    );
  };
  
  export default HeaderTop;