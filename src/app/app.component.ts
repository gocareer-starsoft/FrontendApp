import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private title: Title, private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Actualizar el título cuando la ruta cambie
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.activatedRoute.firstChild;
        if (currentRoute && currentRoute.snapshot.data['title']) {
          const title = currentRoute.snapshot.data['title'];
          this.title.setTitle(`GoCareer | ${title}`);
        } else {
          this.title.setTitle(`GoCareer | ${this.title.getTitle()}`);
        }
      }
    });
  }

}
