// form-schema.model.ts
import { ValidatorFn } from '@angular/forms';

export type FieldType = 'text' | 'email' | 'number' | 'password';

export interface FormField<T> {
  key: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  defaultValue: T[keyof T];
  validators?: ValidatorFn[];
}

export type TypedFormSchema<T> = FormField<T>[];
