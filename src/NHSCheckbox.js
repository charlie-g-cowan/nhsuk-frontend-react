import React from "react";

function NHSCheckbox(props) {
    //TODO: key
    return <div className="nhsuk-checkboxes__item" style={props.style}>
        <input className="nhsuk-checkboxes__input" type="checkbox" name={props.name} value={props.value}
               onChange={props.onChange}/>
        <label className="nhsuk-label nhsuk-checkboxes__label">
            {props.label}
        </label>
    </div>
        ;
}

export default NHSCheckbox;
