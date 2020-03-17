import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { PostEntity } from '../postEntity';
import { IpService } from '../ip.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postDetail: PostEntity;
  id: any;

  constructor(private router: ActivatedRoute, private ipService: IpService) {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.ipService.getPostDetail(this.id).subscribe(postDetail => {
      this.postDetail = postDetail;
      console.log(this.postDetail.id)
    });
  }

  ngOnInit() {
  }

}
