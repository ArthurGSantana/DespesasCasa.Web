import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ILogin, ILoginForm } from '../../../core/interfaces/auth.interface';
import { InputComponent } from '../../../shared/form/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class LoginComponent {
  form!: FormGroup<ILoginForm>;

  onSubmit(): void {
    if (this.form.valid) {
      const login = this.form.value as ILogin;
      this.authService.login(login).subscribe({
        next: (res) => {
          this.authService.routeToPlatform();
        },
        error: (error) => {
          this.alertService.show(
            'error',
            'Endereço de e-mail e/ou senha incorretos! Em caso de dúvidas entre em contato conosco.'
          );
          this.form.reset();
          this.cd.detectChanges();
        }
      });
    }
  }
}
