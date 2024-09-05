import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input
} from '@angular/core';
import {
  FormControl,
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule
} from '@angular/forms';
import { InputType, TValue } from '../../../core/interfaces/generic.interface';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() value: TValue = '';
  @Input() inputType: InputType = 'text';
  @Input() placeholder: string = '';
  @Input() control!: FormControl<TValue> | AbstractControl;
  @Input() mask!: string;
  @Input() openFocus: boolean = false;
  @Input() max: string = '';

  isDisabled = false;

  writeValue(value: TValue): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  onChange = (value: TValue) => {};

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onTouched = () => {};

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
