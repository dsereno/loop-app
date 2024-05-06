import { ReactElement } from "react";
import { FormElement, InputParams } from "../../../types/input";

export function InputIban(props: InputParams): ReactElement {
  //PT50123443211234567890172
    return (
      <div data-testid="input-Iban" className="input-field">
        <label> {props.label} </label>
        <input name={props.label} title="Valid Portuguese Iban Only" required={props.required} type="text" placeholder={props.hint} pattern="^PT\d{23}$" maxLength={25} minLength={25} onChange={props.onChange}></input>
      </div>
    );
  }