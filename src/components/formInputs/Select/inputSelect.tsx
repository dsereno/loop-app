import { ReactElement, useEffect, useState } from "react";
import { InputParams, Option } from "../../../types/input";

function getOptionJsxElement(option: Option): ReactElement {
  return <option key={option.id} value={option.value}>{option.label}</option>
}

export function InputSelect(props: InputParams): ReactElement {
  const {label, options} = props;
  const [selectOptions, setOptions] = useState<ReactElement[] | null>(null);

  const [isDealBreaker, setIsDealBreaker] = useState<boolean>(false);

  useEffect(() => {
    if(options != null && options.length > 0) {
      const fields: ReactElement[] = [];
      options.forEach(element => {
        fields.push(getOptionJsxElement(element));
      });
      setOptions(fields);
      setIsDealBreaker(options[0].deal_breaker);
    }
  }, [options]);

  if(!options || options.length === 0) {
    console.error(`Input of type select and Id ${props.id} had invalid options passed onto it.`);
    return <></>;
  }

  const onChange = (event: any) => {
    props.onChange(event);
    const selectedOption = options.find( (option) => option.value === event.target.value );
    setIsDealBreaker(!!selectedOption ? selectedOption.deal_breaker : false);
  };

    return (
      <div data-testid="input-select" className={`input-field ${isDealBreaker ? "accent" : ""}`}>
        <label> 
          {label}        
        <select name={props.label} required={props.required} onChange={onChange}>
          {selectOptions}
        </select> </label>
      </div>
    );
  }