import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-private-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateHeaderComponent {
  logout(): void {
    // this.authService.logout();
    // this.alertService.show('success', 'Sua sessão foi encerrada!', 3000);
  }
}
