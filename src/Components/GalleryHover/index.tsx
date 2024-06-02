// #region Global Imports
import React, { ReactNode, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
// #endregion Global Imports
// imageUrl='/static/images/floral-leaf/floral-leaf-1.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// #region Local Imports
// #endregion Local Imports

import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { createPortal } from "react-dom";

SwiperCore.use([Pagination, Navigation]);

interface PortalProps {
  children: ReactNode;
  selector: string;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  background-color: white;
  color: black;
`;

type ModalState = Dispatch<SetStateAction<boolean>>;

interface ModalProps {
  mode: any;
  readonly isOpen: boolean;
  readonly setOpen: ModalState;
}
export const GalleryHover = ({ mode, isOpen, setOpen }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <Wrapper>
      <Swiper
        id="swiper"
        className="swiper"
        pagination={{ type: "fraction" }}
        loop
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        onClick={() => setOpen(false)}
      >
        <SwiperSlide style={{ padding: "5%" }} className="slide-item">
          <img height="100%" width="100%" src={mode === 1 ? "/static/images/photo/gallery1.jpeg" : "/static/images/photo/party_gallery1.jpeg"} />
        </SwiperSlide>
        <SwiperSlide style={{ padding: "5%" }} className="slide-item">
          <img height="100%" width="100%" src={mode === 1 ? "/static/images/photo/gallery2.jpeg" : "/static/images/photo/party_gallery2.jpeg"} />
        </SwiperSlide>
        <SwiperSlide style={{ padding: "5%" }} className="slide-item">
          <img height="100%" width="100%" src={mode === 1 ? "/static/images/photo/gallery3.jpeg" : "/static/images/photo/party_gallery3.jpeg"} />
        </SwiperSlide>
        <SwiperSlide style={{ padding: "5%" }} className="slide-item">
          <img height="100%" width="100%" src={mode === 1 ? "/static/images/photo/gallery4.jpeg" : "/static/images/photo/party_gallery4.jpeg"} />
        </SwiperSlide>
        <SwiperSlide style={{ padding: "5%" }} className="slide-item">
          <img height="100%" width="100%" src={mode === 1 ? "/static/images/photo/gallery5.jpeg" : "/static/images/photo/party_gallery5.jpeg"} />
        </SwiperSlide>
        <SwiperSlide style={{ padding: "5%" }} className="slide-item">
          <img height="100%" width="100%" src={mode === 1 ? "/static/images/photo/gallery6.jpeg" : "/static/images/photo/party_gallery6.jpeg"} />
        </SwiperSlide>
      </Swiper>
    </Wrapper>,
    document.getElementById("modal-root") as HTMLDivElement
  );
};
