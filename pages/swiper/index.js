import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.css";
// import Category from "../category";

// Import Swiper styles
// import "simporwiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// eslint-disable-next-line
import "swiper/css/bundle";
import Display from "../../components/display";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
const images = [
  {
    img1: "https://www.nitori-net.jp/ecstatic/include/feature/img22/ncool/TopTk_bnr_cmpc.jpg",
  },
  {
    img2: "https://www.nitori-net.jp/ecstatic/include/feature/img22/ncool/TopTk_bnr_cmpc.jpg",
  },
  {
    img3: "https://www.nitori-net.jp/ecstatic/include/feature/img22/ngrip/TopTk_bnr_cmpc.jpg",
  },
  {
    img4: "https://www.nitori-net.jp/ecstatic/include/feature/img22/electronics/TopTk_bnr_pc.jpg",
  },
  {
    img5: "https://www.nitori-net.jp/ecstatic/include/feature/img22/powersaving/TopTk_bnr_pc.jpg",
  },
  {
    img6: "https://www.nitori-net.jp/ecstatic/include/feature/img22/airconditioner/TopTk_bnr_pc.jpg",
  },
];
export default function App() {
  return (
    <>
      <Display>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className={styles.mySwiper}
        >
          <nav>
            <SwiperSlide>
              {" "}
              <img src={images[0].img1} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={images[4].img5} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={images[2].img3} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={images[3].img4} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={images[4].img5} />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={images[5].img6} />
            </SwiperSlide>
          </nav>
        </Swiper>

        <style jsx>{`
          #app {
            height: 100%;
            height: 400px;
          }
          html,
          body {
            position: relative;
            height: 100%;
            height: 400px;
          }
          img {
            height: 80%;
            width: 100%;
          }

          body {
            background: #eee;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #000;
            margin: 0;
            padding: 0;
          }
          nav {
            background: yellow;
          }
          .swiper {
            width: 100%;
            height: 100%;
            height: 400px;
          }

          .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
          }

          .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            height: 400px;
            object-fit: cover;
          }
        `}</style>
      </Display>
    </>
  );
}
