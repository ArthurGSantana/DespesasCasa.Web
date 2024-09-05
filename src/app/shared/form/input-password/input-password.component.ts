import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPasswordComponent { }
