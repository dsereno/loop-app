import { ReactElement } from "react";
import { FormElement, InputParams } from "../../../types/input";

export function InputText(props: InputParams): ReactElement {
    return (
      <div data-testid="input-text" className="input-field">
        <label> 
          {props.label} 
          <input required={props.required} name={props.label} type="text" placeholder={props.hint} onChange={props.onChange}/>
        </label>

      </div>
    );
  }