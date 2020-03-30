import React from 'react';
import 'nhsuk-frontend/packages/nhsuk.scss';

export function NHSErrorSummaryTitle(props) {
  return <h2 className="nhsuk-error-summary__title" {...props} />;
}

function NHSErrorSummaryBody(props) {
  return <div className="nhsuk-error-summary__body" {...props} />;
}

function NHSErrorSummaryList(props) {
  return <ul className="nhsuk-list nhsuk-error-summary__list" {...props} />;
}

function NHSErrorSummaryListItem(props) {
  return <li {...props}>
    <a href={props.href}>{props.children}</a>
  </li>;
}

export function NHSErrorSummary(props) {
  return <div className="nhsuk-error-summary" {...props} />;
}

export function NHSErrorSummaryBodySimple(props) {
  return <NHSErrorSummaryBody>
    <p {...props} />
  </NHSErrorSummaryBody>;
}

export default NHSErrorSummary;
