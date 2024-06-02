// #region Global Imports
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// #endregion Global Imports
// imageUrl='/images/floral-leaf/floral-leaf-1.png'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
// #region Local Imports
// #endregion Local Imports

const Middle = styled.button`
  padding: 0 28px;
  height: 44px;
  border-radius: 2px;
  margin: 0 10px;
  line-height: 44px;
  color: #fff;
  background-color: #295238;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  padding-top: 100px;
  background-color: black;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  background-color: white;
  color: black;
`;
const StyledSwiperSlide = styled(SwiperSlide)``;

const handleClick = (e: any, path: any) => {
  // youtubeOpen('')
  if (path === "/about") {
    console.log("I clicked on the About Page");
  }
  if (path === "/posts") {
    console.log("I clicked on the Posts Page");
  }
};

export const Gallery: React.FunctionComponent<any> = ({ mode, setOpen }) => {
  console.log("gallery mode", mode);
  const modalHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <section className="galleryWrap atm" id="galleryWrap" style={{ paddingBottom: "10%" }}>
      <div className="galleryInner">
        <div
          className="section_title pt-50 wow fadeIn"
          data-wow-duration="1.3s"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDuration: "1.3s",
            animationDelay: "0.2s",
            animationName: "fadeIn",
            textAlign: "center",
          }}
        >
          <h3 className="title">사진첩</h3>

          <img src="/static/images/section_shape.png" alt="Shape" />
        </div>

        <div className="galWrap mt" onClick={() => modalHandler()}>
          <div className="inner">
            {/* <div className="videoImg">
                                <a href="#;"
                                onClick={(e) => handleClick(e, "/about")} 
                                >
                                    <img src="https://wedding.dddproject.com/data/file/order_form/2113089417_9kKsIDFh_657c81376b1ea29ca76f6b4ec84f36ecb38811b5.jpeg" alt="비디오이미지" />
                                    <span className="btnPlay"></span>
                                </a>
                            </div> */}

            <div className="gallery">
              <div className="galList">
                <div className="col">
                  <ul>
                    {/* <li slide-num="1" onClick={()=>modalHandler()} >
                                                <a>
                                                <span className="img lazy"  style={{ display: 'block'}}>

                                                <StyledSwiper
                                                style={{

                                                    position:"absolute"
                                                }}
                                                loop={true}
                                                spaceBetween={10}
                                                navigation={true}
                                                zoom={true}
                                                onSlideChange={() => console.log('slide change')}
                                                onSwiper={(swiper) => console.log(swiper)}
                                                >
                                                    <SwiperSlide>

                                                        <img src="https://wedding.dddproject.com/data/file/order_form/2113089417_VgIuFH4i_c86a51c01c7509a71d78350c16845b455a21d72f.jpg" />

                                                    </SwiperSlide>
                                                    <SwiperSlide>Slide 2</SwiperSlide>
                                                    <SwiperSlide>Slide 3</SwiperSlide>
                                                    <SwiperSlide>Slide 4</SwiperSlide>
                                                </StyledSwiper>
                                                </span>
                                                </a>
                                            </li> */}
                    <li slide-num="1">
                      <a href="#">
                        <span
                          className="img lazy"
                          style={{
                            display: "block",
                            backgroundImage: `url(/images/photo/${mode === 1 ? "" : "party_"}gallery1.jpeg)`,
                          }}
                        />
                      </a>
                    </li>
                    <li slide-num="2">
                      <a href="#">
                        <span
                          className="img lazy"
                          style={{
                            display: "block",
                            backgroundImage: `url(/images/photo/${mode === 1 ? "" : "party_"}gallery2.jpeg)`,
                          }}
                        />
                      </a>
                    </li>
                    <li slide-num="3">
                      <a href="#">
                        <span
                          className="img lazy"
                          style={{
                            display: "block",
                            backgroundImage: `url(/images/photo/${mode === 1 ? "" : "party_"}gallery3.jpeg)`,
                          }}
                        />
                      </a>
                    </li>
                    <li slide-num="4">
                      <a href="#">
                        <span
                          className="img lazy"
                          style={{
                            display: "block",
                            backgroundImage: `url(/images/photo/${mode === 1 ? "" : "party_"}gallery4.jpeg)`,
                          }}
                        />
                      </a>
                    </li>
                    <li slide-num="5">
                      <a href="#">
                        <span
                          className="img lazy"
                          style={{
                            display: "block",
                            backgroundImage: `url(/images/photo/${mode === 1 ? "" : "party_"}gallery5.jpeg)`,
                          }}
                        />
                      </a>
                    </li>
                    <li slide-num="6">
                      <a href="#">
                        <span
                          className="img lazy"
                          style={{
                            display: "block",
                            backgroundImage: `url(/images/photo/${mode === 1 ? "" : "party_"}gallery6.jpeg)`,
                          }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-9">
                  <div className="section_title text-center greeting-section">
                    <p className="text" style={{ margin: "0px" }}>
                      <br />
                      <strong>사진 더보기</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
