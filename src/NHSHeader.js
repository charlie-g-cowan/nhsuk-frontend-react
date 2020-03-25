import React from 'react';
import 'nhsuk-frontend/dist/nhsuk.min.js';
import 'nhsuk-frontend/packages/nhsuk.scss';
import { NHSSearch } from "./NHSSearch";
import { NHSVectorChevronRight, NHSVectorClose } from "./NHSIcons";

export function NHSNav(props) {
    return <ul className="nhsuk-header__navigation-list" style={{ justifyContent: 'left' }}>
        {props.children}
    </ul>;
}

export function NHSNavLink(props) {
    return <li className="nhsuk-header__navigation-item">
        <a className="nhsuk-header__navigation-link" href={props.href}>
            {props.children}
            <NHSVectorChevronRight/>
        </a>
    </li>;
}

export function NHSAppLogo(props) {
    const headingSize = props.smaller ? 'nhsuk-heading-m' : 'nhsuk-heading-l';
    return <div className="nhsuk-header__logo">
        <h1 className={"nhsuk-logo__text " + headingSize}
            style={{ color: "white", marginBottom: 0 }}>{props.children}</h1>
    </div>;
}

export function NHSHeaderMenu() {
    return <p className="nhsuk-header__navigation-title"><span id="label-navigation">Menu</span>
        <button className="nhsuk-header__navigation-close" id="close-menu">
            <NHSVectorClose/>
            <span className="nhsuk-u-visually-hidden">Close menu</span>
        </button>
    </p>;
}

export function NHSHeaderMenuToggle() {
    return <div className="nhsuk-header__menu">
        <button className="nhsuk-header__menu-toggle" id="toggle-menu">Menu
        </button>
    </div>;
}


export function NHSHeader(props) {
    return <header className="nhsuk-header" style={{ fontFamily: 'Arial, Sans-serif' }} {...props} />;
}

export function NHSHeaderContainer(props) {
    return <div className="nhsuk-width-container nhsuk-header__container" {...props} />;
}

export function NHSWidthContainer(props) {
    return <div className="nhsuk-width-container" {...props} />;
}

export function NHSHeaderNavigation(props) {
    return <nav className="nhsuk-header__navigation" id="header-navigation" {...props} />;
}

export function NHSHeaderContent(props) {
    return <div className="nhsuk-header__content" id="content-header" {...props}/>;
}

export function NHSHeaderOrthoPROMS(props) {
    const navigation = props.navigationDisabled ? null :
        <NHSHeaderNavigation>
            <NHSWidthContainer>
                <NHSHeaderMenu/>
                <NHSNav>
                    <NHSNavLink href='/'>Home</NHSNavLink>
                    <NHSNavLink href='/About'>About</NHSNavLink>
                    <NHSNavLink href='/NationalStatistics'>National Statistics</NHSNavLink>
                </NHSNav>
            </NHSWidthContainer>
        </NHSHeaderNavigation>;
    const search = props.searchDisabled ? null : <NHSSearch/>;
    const headerContent = props.searchDisabled && props.navigationDisabled ? null :
        <NHSHeaderContent>
            <NHSHeaderMenuToggle/>
            {search}
            {props.children}
        </NHSHeaderContent>;
    return (
        <NHSHeader>
            <NHSHeaderContainer>
                <a href={'/'}><NHSAppLogo smaller={props.navigationDisabled}>orthoPROMS</NHSAppLogo></a>
                {headerContent}
            </NHSHeaderContainer>
            {navigation}
        </NHSHeader>
    );
}
