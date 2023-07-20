import { InputGeneric } from "./GenricInput";

export class InputControlText extends InputGeneric<string>{
override controlType = 'Text';
}
export class InputControlRadio extends InputGeneric<string>{
override controlType = 'Radio';
}


export class InputControlDate extends InputGeneric<string>{
    override controlType = 'Date';
    }