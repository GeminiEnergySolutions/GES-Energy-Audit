import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  constructor(private router: Router,
  ) {
    if (this.router.url === '/admin') {
      this.router.ngOnDestroy();
      window.location.href = 'http://127.0.0.1:8000/admin/';
    }
  }

}
