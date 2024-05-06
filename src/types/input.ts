export type MandatoryFields = {
    id: number;
    position: number;
    type: string;
    label: string;
    hint: string;
    required: boolean;
}

export type OptionalFields = {
    label_url? : string;
    hint_url?: string;
    hint_icon?: string;
    format? : string;
    granularity?: any;
    deal_breaker_values?: string;  // This is for bool?
    dropdown? : boolean;
    options? : Option[];
}

export type FormElement = MandatoryFields & OptionalFields;

export type InputParams = FormElement & {
    onChange: (value: any) => void
};


export interface Option {
    id: number;
    label: string;
    value: string;
    deal_breaker: boolean;
}

// Maybe create class that returns the corresponding React element instead of the other structure
enum FormElementType {
    SELECT,
    TEXT,
    IMAGE,
    BOOL,
    NUMBER,
    IBAN,
    POSTALCODE,
    PHONENUMBER,
    DATE
  }