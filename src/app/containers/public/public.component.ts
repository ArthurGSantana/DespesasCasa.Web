import {
  trigger,
  transition,
  query,
  style,
  animate
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from "../../shared/core/loader/loader.component";
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [CommonModule, RouterModule, LoaderComponent],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.2s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
  ]
})
export class PublicComponent {
  loaderService = inject(LoaderService);
}
