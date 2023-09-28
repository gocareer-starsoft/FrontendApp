import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  invalidUrl: string = "";

  constructor(private route: ActivatedRoute, private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.invalidUrl = this.route.snapshot.url[0].path;
  }
}
