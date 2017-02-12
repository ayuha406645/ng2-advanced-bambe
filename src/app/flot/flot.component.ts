import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {

  username: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.parent.snapshot.params['username'];
  }

}
