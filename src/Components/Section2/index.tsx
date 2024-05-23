// #region Global Imports
import React from "react";
// #endregion Global Imports
// #imageUrl='/images/floral-leaf/floral-leaf-1.png'

// #region Local Imports
// #endregion Local Imports

export const Section2: React.FunctionComponent<any> = ({ mode }) => {
    return (
        <>
            <section id="coming_soon" className="coming_soon_area pt-20 pb-70">
                <div className="coming_soon_shape_1" style={{ zIndex: 1 }}>
                    <img src="/static/images/shape-1.png" alt="shape" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div
                                className="section_title pt-50 wow fadeIn"
                                data-wow-duration="1.3s"
                                data-wow-delay="0.2s"
                                style={{
                                    textAlign: "center",
                                    visibility: "visible",
                                    animationDuration: "1.3s",
                                    animationDelay: "0.2s",
                                    animationName: "fadeIn",
                                }}
                            >
                                <h3 className="title">초대장</h3>
                                {/* <p>새로운 시작</p> */}

                                <img
                                    src="/static/images/section_shape.png"
                                    alt="Shape"
                                />
                            </div>
                        </div>
                        <div
                            className="contact_wrapper wow fadeInUpBig"
                            data-wow-duration="1.3s"
                            data-wow-delay="0.4s"
                            style={{
                                paddingBottom: 30,
                                boxShadow: "none",
                                visibility: "visible",
                                animationDuration: "1.3s",
                                animationDelay: "0.4s",
                                animationName: "fadeInUp",
                            }}
                        >
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <div className="section_title text-center pb-30 greeting-section">
                                        <div
                                            className="after-line"
                                            style={{
                                                textAlign: "left",
                                                paddingTop: 20,
                                                paddingBottom: 20,
                                                maxWidth: 400,
                                                margin: "auto",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    fontSize: "1.7rem",
                                                    lineHeight: "inherit",
                                                    color: "dimgrey",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {mode === 1 ? (
                                                    <i>
                                                        내가 그의 이름을 불러
                                                        주기 전에는 그는 다만
                                                        하나의 몸짓에 지나지
                                                        않았다.
                                                        <br />
                                                        <br />
                                                        내가 그의 이름을 불러
                                                        주었을 때 그는 나에게로
                                                        와서 꽃이 되었다.
                                                        <br />
                                                        <br />
                                                        서로가 마주보며 다져온
                                                        사랑을 이제 함께 한 곳을
                                                        바라보며 걸어갈 수 있는
                                                        큰 사랑으로 키우고자
                                                        합니다. 저희 두 사람이
                                                        사랑의 이름으로 지켜나갈
                                                        수 있도록 앞날을 축복해
                                                        주시면 감사하겠습니다.
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                    </i>
                                                ) : (
                                                    <i>
                                                        첫번쨰 소개팅 자리 이후
                                                        두번째 만남에 고백을
                                                        하여 사랑을 쟁취한
                                                        상남자
                                                        <br />
                                                        고백은 받아주었지만 아직
                                                        마음을 다 준건 아니니
                                                        거리를 두던 쳘벽녀
                                                        <br />
                                                        <br />
                                                        두 사람은 어떤 상황과
                                                        위기에서도 늘 서로의
                                                        웃음이 되어주며 극 P
                                                        커플이 되었습니다
                                                        <br />
                                                        <br />
                                                        서로가 마주보며 다져온
                                                        사랑을 이제 함께 한 곳을
                                                        바라보며 걸어갈 수 있는
                                                        큰 사랑으로 키우고자
                                                        합니다. 저희 두 사람이
                                                        사랑의 이름으로 지켜나갈
                                                        수 있도록 앞날을 축복해
                                                        주시면 감사하겠습니다.
                                                        <br />
                                                        <br />
                                                        <br />
                                                        <br />
                                                    </i>
                                                )}
                                            </p>
                                        </div>

                                        <p className="text">
                                            <br />
                                            <strong
                                                style={{ fontSize: "3rem" }}
                                            >
                                                {mode === 1
                                                    ? "주창선 이화실"
                                                    : "한보라"}
                                            </strong>{" "}
                                            의 {mode === 1 ? "장남" : "남자"}{" "}
                                            <strong
                                                style={{ fontSize: "3rem" }}
                                            >
                                                경훈
                                            </strong>
                                            <br />
                                            <br />
                                            <strong
                                                style={{ fontSize: "3rem" }}
                                            >
                                                {mode === 1
                                                    ? "한사홍 심재선"
                                                    : "주경훈"}
                                            </strong>{" "}
                                            의 {mode === 1 ? "차녀" : "여자"}{" "}
                                            <strong
                                                style={{ fontSize: "3rem" }}
                                            >
                                                보라
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coming_soon_shape_2">
                    <img src="/static/images/shape-2.png" alt="shape" />
                </div>
            </section>
        </>
    );
};
