import * as React from "react";

import { INavbar } from "./Navbar";

const Navbar: React.FunctionComponent<INavbar.IProps> = (): JSX.Element => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-transparent sticky-top mynavbar">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        Zisum
                    </a>
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="offcanvas offcanvas-end"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5
                                className="offcanvas-title"
                                id="offcanvasNavbarLabel"
                            >
                                Zisum
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body">
                            <div className="navbar-nav ms-auto">
                                <a
                                    data-scroll
                                    className="nav-link"
                                    href="#home"
                                >
                                    Home
                                </a>
                                <a
                                    data-scroll
                                    className="nav-link"
                                    href="#info"
                                >
                                    Info
                                </a>
                                <a
                                    data-scroll
                                    className="nav-link"
                                    href="#story"
                                >
                                    Story
                                </a>
                                <a
                                    data-scroll
                                    className="nav-link"
                                    href="#gallery"
                                >
                                    Gallery
                                </a>
                                <a
                                    data-scroll
                                    className="nav-link"
                                    href="#rsvp"
                                >
                                    RSVP
                                </a>
                                <a
                                    data-scroll
                                    className="nav-link"
                                    href="#gifts"
                                >
                                    Gifts
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="navbar-tablet">
                <div className="navbar-links-tablet">
                    <a href="#home" className="nav-link-tablet">
                        <i className="bi bi-house-exclamation" />
                        <span>Home</span>
                    </a>
                    <a href="#info" className="nav-link-tablet">
                        <i className="bi bi-inbox"> </i>
                        <span>Info</span>
                    </a>
                    <a href="#story" className="nav-link-tablet">
                        <i className="bi bi-clock-history" />
                        <span>Story</span>
                    </a>
                    <a href="#gallery" className="nav-link-tablet">
                        <i className="bi bi-image" />
                        <span>Gallery</span>
                    </a>
                    <a href="#rsvp" className="nav-link-tablet">
                        <i className="bi bi-envelope-heart" />
                        <span>RSVP</span>
                    </a>
                    <a href="#gifts" className="nav-link-tablet">
                        <i className="bi bi-gift" />
                        <span>Gifts</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export { Navbar };
