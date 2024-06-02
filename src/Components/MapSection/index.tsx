// #region Global Imports
import React from "react";
import styled from "styled-components";
// #endregion Global Imports
// imageUrl='/static/images/floral-leaf/floral-leaf-1.png'

// #region Local Imports
// #endregion Local Imports

const Container = styled.img<any>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ theme }) => theme.colors.primary};
`;

export const MapSection: React.FunctionComponent<any> = (props) => {
  return (
    <>
      <section className="location-section mcard_29" style={{ paddingBottom: "10%" }}>
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
          <h3 className="title">오시는길</h3>

          <img src="/static/static/images/section_shape.png" alt="Shape" style={{ paddingBottom: "10%" }} />
        </div>
        <div className="map-area">
          <div className="head">
            <div className="tit">아펠가모 반포점</div>
            <div className="txt">
              <p>서울특별시 서초구 반포대로 235 (반포동), 반포 효성빌딩 LL층(지하1층)</p> <p>Tel. 02-3431-0230</p>
            </div>
            {/* <button onClick={()=>"toCall('02-941-7711')"} className="tel">전화걸기</button> */}
          </div>
          <img src="/static/images/map1.png" alt="Build Status" />
        </div>
        <div className="info">
          <div className="contain">
            <dl>
              <dt className="">지하철</dt>
              <dd className="">고속터미널역 5번 출구(3호선, 7호선, 9호선) 방향으로 나와 서래공원 방면 신호등 건넌 후 첫번째 건물 (반포 효설빌딩) LL층</dd>
            </dl>
            <dl>
              <dt className="">주차안내</dt>
              <dd className="">반포효성빌딩 2시간 무료 주차</dd>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};
