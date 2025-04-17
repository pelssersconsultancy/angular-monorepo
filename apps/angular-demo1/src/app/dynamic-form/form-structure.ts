export interface FormStructure {
  formFieldGroups: FormFieldGroup[];
}

export interface FormFieldGroup {
  id: string;
  label: string;
  fields: FormField[];
}

export interface FormField {
  id: string;
  label: string;
  type: FormFieldType;
  placeholder?: string;
}

export type FormFieldType =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'textarea';
