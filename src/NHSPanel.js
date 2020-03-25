import React from "react";
import 'nhsuk-frontend/dist/nhsuk.min.js';
import 'nhsuk-frontend/packages/nhsuk.scss';

export function NHSPanelTitle(props) {
    return <h3 {...props} />
}

export function NHSPanelBody(props) {
    return props.children;
}

export function NHSPanel(props) {
    return <div className="nhsuk-panel" {...props} />;
}

export function NHSPanelWithLabel(props) {
    return <div className="nhsuk-panel-with-label" {...props} />;
}

export function NHSPanelConfirmation(props) {
    return <div className="nhsuk-panel nhsuk-panel--confirmation nhsuk-u-margin-top-0 nhsuk-u-margin-bottom-4" {...props}></div>
}
