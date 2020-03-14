import React from "react";

function NHSCheckbox(props) {
    return <div className="nhsuk-checkboxes__item" style={props.style}>
        <input className="nhsuk-checkboxes__input" type="checkbox" name={props.name} value={props.value}/>
            <label className="nhsuk-label nhsuk-checkboxes__label">
                {props.label}
            </label>
    </div>
;
}

export default NHSCheckbox;
