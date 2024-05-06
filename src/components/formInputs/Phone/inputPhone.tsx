import { ReactElement } from "react";
import { FormElement, InputParams } from "../../../types/input";

export function InputPhone(props: InputParams): ReactElement {
    return (
      <div data-testid="input-PhoneNumber" className="input-field">
        <label> {props.label} </label>
        <input name={props.label} type="tel" pattern="[0-9]{9}" placeholder={props.hint} onChange={props.onChange} maxLength={9}></input>
      </div>
    );
  }