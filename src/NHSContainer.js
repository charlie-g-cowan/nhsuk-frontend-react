import React from "react";
import 'nhsuk-frontend/dist/nhsuk.min.js';
import 'nhsuk-frontend/packages/nhsuk.scss';

function NHSContainer(props) {
    return <div className="nhsuk-width-container" style={{ fontFamily: 'Arial, Sans-serif' }} {...props}/>;
}

export default NHSContainer;
