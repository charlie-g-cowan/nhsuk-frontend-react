import React from "react";
import { NHSVectorChevronLeft } from "./NHSIcons";
// import 'nhsuk-frontend/dist/nhsuk.min.js';
import 'nhsuk-frontend/packages/nhsuk.scss';

function NHSBackLink(props) {
    return <div className="nhsuk-back-link" style={{cursor: 'pointer'}}>
        <a className="nhsuk-back-link__link" onClick={props.onClick} href={props.href}>
            <NHSVectorChevronLeft/>
            {props.children}
        </a>
    </div>;
}

export default NHSBackLink;
