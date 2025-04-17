// form-builder.service.ts
import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TypedFormSchema } from './typed-form-schema.model';

@Injectable({ providedIn: 'root' })
export class TypedFormBuilderService {
  buildForm<T>(
    schema: TypedFormSchema<T>
  ): FormGroup<{ [K in keyof T]: FormControl<T[K]> }> {
    const group = {} as { [K in keyof T]: FormControl<T[K]> };

    for (const field of schema) {
      group[field.key as keyof T] = new FormControl<T[keyof T]>(
        field.defaultValue as T[keyof T],
        { validators: field.validators ?? [], nonNullable: true }
      );
    }

    return new FormGroup(group);
  }
}
