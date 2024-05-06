import { ReactElement, useEffect, useState } from "react";
import { InputBoolProperties } from "./types";
import { InputParams } from "../../../types/input";

export function InputBool(props: InputParams): ReactElement {
  const [isDealBreaker, setIsDealBreaker] = useState<boolean>(false);

  useEffect(() => {
    // Default value
    setIsDealBreaker(props.deal_breaker_values === "false");
  }, [props]);

  const onChange = (event: any) => {
    props.onChange(event);
    const value = event.target.checked;
    setIsDealBreaker(props.deal_breaker_values === "false" && !value || props.deal_breaker_values === "true" && value);
  };

    return (
      <div data-testid="input-bool" className={`${isDealBreaker ? "accent" : ""}`}>
        <label> 
          {props.label} 
          <input type="checkbox" data-testid="input-bool-checkbox" name={props.label} onChange={onChange}/>
          </label>
      </div>
    );
  }