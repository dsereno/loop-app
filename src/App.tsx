import { ReactElement, useEffect, useState } from 'react';
import './App.css';
import {InputBool, InputDate, InputIban, InputNumber, InputPhone, InputSelect, InputText} from './components/formInputs';
import UseLoopFormulary from './hooks/useLoopFormulary';
import { FormElement } from './types/input';

function getFormJsxElement(element: FormElement, onChange: (value: any) => void): ReactElement {
  switch (element.type) {
    case 'input:select':
      return <InputSelect key={element.id} onChange={onChange} {...element} />;
    case 'input:text' || 'info:text' :
      return <InputText key={element.id} onChange={onChange} {...element}/>;
    case 'input:image':
      return <InputText key={element.id} onChange={onChange} {...element}/>;// <InputImage/>
    case 'input:bool':
      return <InputBool key={element.id} onChange={onChange} {...element}/>;
    case 'input:number':
      return <InputNumber key={element.id} onChange={onChange} {...element}/>;
    case 'input:iban':
      return <InputIban key={element.id} onChange={onChange} {...element}/>;
    case 'input:postalcode':
      return <InputText key={element.id} onChange={onChange} {...element}/>; //<InputPostalCode/>
    case 'input:phonenumber':
      return <InputPhone key={element.id} onChange={onChange} {...element}/>;
    case 'input:date':
      return <InputDate key={element.id} onChange={onChange} {...element}/>;
    default:
      return <InputText key={element.id} onChange={onChange} {...element}/>;
  }
}

function isValueDealBreaker(element: FormElement, value: any) {
  if(element.type == 'input:bool' && element?.deal_breaker_values !== "") {
    if( element.deal_breaker_values === "false" && !value || element.deal_breaker_values === "true" && value  ) {
      return true;
    }
  } else if (element.type == 'input:select') {
    // Check if option selected is a dealbreaker
    const selectedOption = element.options?.find((opt) => opt.value === value);
    if(!selectedOption) {
      console.error('Something Very Strange was here');
    } else if(selectedOption.deal_breaker) {
      return true;
    }
  } else {
    return false;
  }
}

function App() {
  let { data } = UseLoopFormulary('/input.json');

  const [fields, setFields] = useState<ReactElement[] | null>(null);

  const generateCallBack = (element:FormElement) => {
    const _element = element;
    const label = element.label
    return (event: any) => {
      let value = element.type == 'input:bool' ? event.target.checked : event.target.value;
      isValueDealBreaker(_element, value) && alert('This is a Deal Breaker');
      // We could all kinds of fun things here if we desired
    }
  }

  useEffect(() => {
    if(data != null) {
      const fields: ReactElement[] = [];
      data.forEach(element => {
        fields.push(getFormJsxElement(element, generateCallBack(element)));
      });
      setFields(fields);
    }
  }, [data]);

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const form = event.target;
    const formData = new FormData(form);

    const dealBreakerList = [];
    if(data) {
      for (let i = 0; i < data.length; i++) {
        const field = data[i];
        const value = formData.get(field.label);
        if(isValueDealBreaker(field, value )) {
          dealBreakerList.push(field);
        }
      }
    }

    if(dealBreakerList.length > 0) {
      // We Have the list of deal Breakers we can 
      alert('Unfortunately this product does not meet our criteria to enter the loop');
    } else {
      alert('This product is fine And Ready do Roll');
    }
    // We can parse the form here if we want to
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          {fields}
          <button type='submit'> SUBMIT</button>
        </form>
      </header>
    </div>
  );
}

export default App;
