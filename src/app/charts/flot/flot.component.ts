import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit, OnDestroy {

  username: string;
  parentParams$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.parentParams$ = this.route.parent.params.subscribe(params => {
      console.log(params['username']);
    });

    // 透過 this.route.snapshot.parent 也可以直接取得上層路由參數
    this.route.snapshot.parent.params['username'];
  }

  ngOnDestroy() {
    this.parentParams$.unsubscribe();
  }

}
