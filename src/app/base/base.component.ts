import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openPage(routeName: string) {
    this.router.navigateByUrl(`/${routeName}`)
  }
}