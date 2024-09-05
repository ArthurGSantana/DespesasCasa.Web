import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [CommonModule, FormsModule, NoCopyPasteDirective],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
      multi: true
    }
  ]
})
export class InputPasswordComponent implements ControlValueAccessor {
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() control!: FormControl<string>;

  isDisabled = false;
  inputType: 'password' | 'text' = 'password';

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  onChange = (value: string) => {};

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    this.onChange(this.value);
  }

  onTouched = () => {};

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
