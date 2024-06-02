// #region Global Imports
import React from "react";
import styled from "styled-components";
// #endregion Global Imports
// imageUrl='/images/floral-leaf/floral-leaf-1.png'

// #region Local Imports
// #endregion Local Imports

const Container = styled.section<any>``;

export const Section1: React.FunctionComponent<any> = ({ mode }) => {
    return (
        <Container
            id="hero"
            className={`${
                mode !== 1 ? "party" : ""
            } hero w-100 h-100 p-3 mx-auto text-center d-flex justify-content-center align-items-center text-white overlay-content`}
        >
            <main id="heroMain">
                <h4 style={{ color: "#d1d1d1" }}>우 리 결 혼 합 니 다</h4>
                <h1 style={{ color: "#d1d1d1" }}>주경훈 & 한보라</h1>
                <p style={{ color: "#273038" }}>2024. 12. 7. (토) 오후 3:30</p>
                <p style={{ color: "#273038" }}>아펠가모 반포 웨딩홀</p>
                <div className="simply-countdown" />
                <div className="simply-countdown" />
                <div className="simply-countdown" />

                <div className="simply-countdown" />
                <div className="d-flex w-75 d-flex justify-content-center align-items-center flex-column mx-auto mt-4">
                    {/* <a className="btn btn-md" target="_blank">
              <i className="bi bi-calendar"></i> Save Tanggal
            </a> */}
                </div>
            </main>
        </Container>
    );
};
