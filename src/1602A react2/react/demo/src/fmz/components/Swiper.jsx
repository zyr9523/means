import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

export default class Banner extends Component {
  render() {
    let {bannerdata} = this.props;
    return (
      <div className="swiper-container banner" ref={(node)=>{
        new Swiper(node,{
            autoplay:true
        })
    }}>
        <div className="swiper-wrapper">
          {
            bannerdata.map((item,index)=>{
              return <div className="swiper-slide" key={index}>
                    <img src={item.img} alt=""/>
                </div>
            })  
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}
