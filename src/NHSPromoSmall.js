import React from 'react';
import 'nhsuk-frontend/packages/nhsuk.scss';

export default function NHSPromoSmall(props) {
  return (
    <div className="nhsuk-promo nhsuk-promo--small" style={{backgroundColor: 'white'}}>
      <div className="nhsuk-promo__content">
        <h3 className="nhsuk-promo__heading">{props.title}</h3>
        <p className="nhsuk-promo__description">{props.message}</p>
      </div>
    </div>
  );
}
