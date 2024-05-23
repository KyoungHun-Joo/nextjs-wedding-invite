// #region Global Imports
import React from "react";
// #endregion Global Imports

// #region Local Imports
// #endregion Local Imports

export const SectionCall: React.FunctionComponent<any> = () => {
    return (
        <section
            id="footer"
            className="footer_area"
            style={{ paddingBottom: "10%" }}
        >
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
                <h3 className="title">연락처</h3>

                <img src="/static/images/section_shape.png" alt="Shape" />
            </div>
            <div className="footer_shape_1">
                <img src="/static/images/shape-1.png" alt="shape" />
            </div>
            <div className="container">
                <div className="footer_widget pt-50 pb-10 text-center">
                    <div className="footer_title">
                        <h5 className="title">
                            신랑한테 연락하기
                            <img
                                className="com-btn tel sl"
                                src="/static/images/icon_tel.png"
                                alt="shape"
                            />
                        </h5>
                        <br />
                        <h5 className="title">
                            신부한테 연락하기
                            <img
                                className="com-btn tel sb"
                                src="/static/images/icon_tel.png"
                                alt="shape"
                            />
                        </h5>
                    </div>
                </div>
            </div>
            <section className="honjuTel-section footer_widget">
                <div className="con footer_title">
                    <div className="col">
                        <div className="title">신랑 측 혼주</div>
                        <div className="box first">
                            <div className="name">
                                <span>아버지</span> <strong>주창선</strong>
                                <img
                                    className="com-btn tel sl"
                                    src="/static/images/icon_tel.png"
                                    alt="shape"
                                />
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <span>어머니</span> <strong>이화실</strong>
                                <img
                                    className="com-btn tel sl"
                                    src="/static/images/icon_tel.png"
                                    alt="shape"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col rightCol">
                        <div className="title ">신부 측 혼주</div>
                        <div className="box first">
                            <div className="name">
                                <span>아버지</span> <strong>한사홍</strong>
                                <img
                                    className="com-btn tel sb"
                                    src="/static/images/icon_tel.png"
                                    alt="shape"
                                />
                            </div>
                        </div>
                        <div className="box">
                            <div className="name">
                                <span>어머니</span> <strong>심재선</strong>
                                <img
                                    className="com-btn tel sb"
                                    src="/static/images/icon_tel.png"
                                    alt="shape"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_shape_1">
                    <img src="/static/images/shape-1.png" alt="shape" />
                </div>
            </section>
            <div className="coming_soon_shape_2">
                <img src="/static/images/shape-2.png" alt="shape" />
            </div>
        </section>
    );
};
