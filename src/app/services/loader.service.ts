import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderCount = 0;
  loading = signal(false);

  show() {
    this.loaderCount++;
    this.loading.set(true);
  }

  hide() {
    this.loaderCount--;

    if (this.loaderCount <= 0) {
      this.loaderCount = 0;
      this.loading.set(false);
    }
  }
}
