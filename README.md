Loop Test App Unfinished

- input:text and input:number;
- input:iban, input:phonenumber (this can be a variant of the
previous inputs but it must have a mask to correctly format
the input value and it needs to validate its data (like
validate if the phone number has 9 digits for portuguese
phone numbers));
- input:date (ignore the “granularity” and “format” keys,
implement just a simple version with a datetime picker);
- input:select (there are 2 different versions here depending
on the flag “dropdown”: one will show a regular dropdown
(if “dropdown” is true), and the other will show all the
possible answers as a set of buttons (when the flag
“dropdown” is false or undefined));
- input:bool (this can be represented as a checkbox);

Where suitable, we need to be able to check easily if the protocol
has valid answers (maybe a next button, a message, ...), and for this
to happen, all the required questions should be answered and
none of the deal-breaker values can be selected.
