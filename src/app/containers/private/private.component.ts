import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from "@angular/router";
import { LoaderComponent } from "../../shared/core/loader/loader.component";
import { LoaderService } from "../../services/loader.service";
import { PrivateHeaderComponent } from "../../shared/core/private-header/private-header.component";

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LoaderComponent,
    PrivateHeaderComponent
],
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateComponent {
  loaderService = inject(LoaderService);
}
