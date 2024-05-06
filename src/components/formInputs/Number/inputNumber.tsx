import { ReactElement } from "react";
import { FormElement, InputParams } from "../../../types/input";

export function InputNumber(props: InputParams): ReactElement {
    return (
      <div data-testid="input-Number" className="input-field">
        <label> {props.label} </label>
        <input name={props.label} required={props.required} type="number" placeholder={props.hint} onChange={props.onChange}></input>
      </div>
    );
  }