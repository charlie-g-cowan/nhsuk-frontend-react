import React from "react";
import 'nhsuk-frontend/dist/nhsuk.min.js';
import 'nhsuk-frontend/packages/nhsuk.scss';

function NHSWrapper(props) {
    return <main className="nhsuk-main-wrapper" id="maincontent" {...props} />;
}

export default NHSWrapper;
