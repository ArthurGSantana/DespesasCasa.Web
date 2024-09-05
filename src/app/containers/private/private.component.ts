import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateComponent {
  loaderService = inject(LoaderService);
}
