import React from "react";
import 'nhsuk-frontend/dist/nhsuk.min.js';
import 'nhsuk-frontend/packages/nhsuk.scss';
import { NHSFormGroup, NHSFormHint } from "./NHSComponents";

export function NHSFieldsetLegend(props) {
    return <legend className="nhsuk-fieldset__legend" {...props} />;
}

export function NHSFieldset(props) {
    return <fieldset className="nhsuk-fieldset" {...props} />;
}

function NHSRadioGroup(props) {
    return <NHSFormGroup>
        <NHSFieldset className="nhsuk-fieldset">
            <NHSFieldsetLegend>{props.label}</NHSFieldsetLegend>
            <NHSFormHint>{props.help}</NHSFormHint>
            <div className="nhsuk-radios">
                {props.options.map((option) => {
                    return <div className="nhsuk-radios__item">
                        <input className="nhsuk-radios__input" name={props.name} type="radio"
                               value={option.value}/>
                        <label className="nhsuk-label nhsuk-radios__label">
                            {option.label}
                        </label>
                    </div>;
                })}
            </div>
        </NHSFieldset>
    </NHSFormGroup>
        ;
}

export default NHSRadioGroup;
