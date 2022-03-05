// import React from 'react'

// const Hero = () => {
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default Hero


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

 function Slider() {
  return (
    <>
      <Swiper 
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 40,paddingBottom:40}}>
          <img src="https://cdn.toy.ru/upload/iblock/6b2/833x356_presents_for_little_princess.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 40,paddingBottom:40}}>
          <img src="https://cdn.toy.ru/upload/iblock/99e/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 40,paddingBottom:40}}>
          <img src="https://cdn.toy.ru/upload/iblock/b90/83.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 40,paddingBottom:40}}>
          <img src="https://cdn.toy.ru/upload/iblock/7b8/833356_lego_news.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 40,paddingBottom:40}}>
          <img src="https://cdn.toy.ru/upload/iblock/1af/1bdc7e31_f094_41ea_b666_01ac0449707c.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 40,paddingBottom:40}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPKIv948o14qEImuqkl2Fet_DkwnGWN5jlQ&usqp=CAU" alt=""  width="600"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider