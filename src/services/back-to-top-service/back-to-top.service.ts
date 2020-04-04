import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackToTopService {
  constructor() {}

  backToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
