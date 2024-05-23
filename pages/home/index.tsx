// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch, connect } from "react-redux";
// #endregion Global Imports
import { createPortal } from "react-dom";

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import {
    Container,
    Top,
    TopText,
    Middle,
    MiddleLeft,
    MiddleLeftButtons,
    MiddleRight,
    Apod,
    ApodButton,
} from "@Styled/Home";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import {
    Heading,
    LocaleButton,
    Float,
    Navbar,
    Section1,
    Section2,
    SectionCall,
    Gallery,
    GalleryHover,
    Footer,
    MapSection,
} from "@Components";
// #endregion Local Imports
import { useState } from "react";

// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
}) => {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(1);
    const [isServer, setIsServer] = useState(true);

    console.log("home open", open);
    console.log("mode", mode);

    const removeModal = () => {
        if (open) setOpen(false);
    };

    const renderLocaleButtons = (activeLanguage: string) =>
        ["en", "es", "tr"].map(lang => (
            <LocaleButton
                key={lang}
                lang={lang}
                isActive={activeLanguage === lang}
                onClick={() => i18n.changeLanguage(lang)}
            />
        ));

    return (
        <Container onClick={() => removeModal()}>
            <Float mode={mode} />
            <Section1 mode={mode} />
            <Section2 mode={mode} />
            <Gallery mode={mode} setOpen={setOpen} />
            <SectionCall />
            <MapSection />
            <Footer setMode={setMode} />
            <GalleryHover mode={mode} isOpen={open} setOpen={setOpen} />
        </Container>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
