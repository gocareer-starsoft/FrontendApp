import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private pageTitle: string = 'GoCareer'; // Título predeterminado

  setTitle(title: string) {
    this.pageTitle = title;
  }

  getPageTitle() {
    return this.pageTitle;
  }
}
