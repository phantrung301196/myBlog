import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IpService } from '../ip.service';
import { PostEntity } from '../postEntity';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  content: PostEntity[];

  constructor(private ipService: IpService, private router: Router) {
  }

  ngOnInit() {
    this.ipService.getListPost().subscribe(ip => {
      this.content = ip;
      console.log(ip);
    });
  }

}
