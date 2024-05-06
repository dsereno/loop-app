import { ReactElement } from "react";
import { FormElement, InputParams } from "../../../types/input";

export function InputDate(props: InputParams): ReactElement {
    return (
      <div data-testid="input-date" className="input-field">
        <label> {props.label} </label>
        <input name={props.label} required={props.required} type="date" placeholder={props.hint} onChange={props.onChange}></input>
      </div>
    );
  }